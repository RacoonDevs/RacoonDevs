import { useState, useEffect, useCallback } from "react";

export const CURRENCIES = [
  { code: "MXN", symbol: "$", name: "Peso Mexicano", flag: "🇲🇽" },
  { code: "USD", symbol: "$", name: "Dólar Estadounidense", flag: "🇺🇸" },
  { code: "CAD", symbol: "$", name: "Dólar Canadiense", flag: "🇨🇦" },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
  { code: "COP", symbol: "$", name: "Peso Colombiano", flag: "🇨🇴" },
  { code: "PEN", symbol: "S/", name: "Sol Peruano", flag: "🇵🇪" },
  { code: "ARS", symbol: "$", name: "Peso Argentino", flag: "🇦🇷" },
  { code: "BRL", symbol: "R$", name: "Real Brasileño", flag: "🇧🇷" },
];

const CURRENCY_CODES = new Set(CURRENCIES.map((c) => c.code));

const CACHE_KEY = "racoondevs_exchange_rates";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

const TIMEZONE_TO_CURRENCY = {
  "America/Mexico_City": "MXN",
  "America/Cancun": "MXN",
  "America/Monterrey": "MXN",
  "America/Chihuahua": "MXN",
  "America/Mazatlan": "MXN",
  "America/Hermosillo": "MXN",
  "America/Tijuana": "MXN",
  "America/Merida": "MXN",
  "America/New_York": "USD",
  "America/Chicago": "USD",
  "America/Denver": "USD",
  "America/Los_Angeles": "USD",
  "America/Phoenix": "USD",
  "America/Toronto": "CAD",
  "America/Vancouver": "CAD",
  "America/Edmonton": "CAD",
  "America/Winnipeg": "CAD",
  "America/Halifax": "CAD",
  "America/Bogota": "COP",
  "America/Lima": "PEN",
  "America/Argentina/Buenos_Aires": "ARS",
  "America/Buenos_Aires": "ARS",
  "America/Sao_Paulo": "BRL",
  "America/Fortaleza": "BRL",
  "America/Recife": "BRL",
  "Europe/Madrid": "EUR",
  "Europe/Paris": "EUR",
  "Europe/Berlin": "EUR",
  "Europe/Rome": "EUR",
  "Europe/Amsterdam": "EUR",
  "Europe/Lisbon": "EUR",
  "Europe/Brussels": "EUR",
  "Europe/Vienna": "EUR",
};

const detectCurrency = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && TIMEZONE_TO_CURRENCY[tz]) {
      return TIMEZONE_TO_CURRENCY[tz];
    }

    const lang = navigator.language || navigator.userLanguage || "";
    const region = lang.split("-")[1]?.toUpperCase();
    const regionMap = {
      MX: "MXN",
      US: "USD",
      CA: "CAD",
      CO: "COP",
      PE: "PEN",
      AR: "ARS",
      BR: "BRL",
      ES: "EUR",
      FR: "EUR",
      DE: "EUR",
      IT: "EUR",
      PT: "EUR",
    };
    if (region && regionMap[region]) {
      return regionMap[region];
    }
  } catch {
    // ignore detection errors
  }
  return "MXN";
};

const getCachedRates = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { rates, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return rates;
  } catch {
    return null;
  }
};

const setCachedRates = (rates) => {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ rates, timestamp: Date.now() }),
    );
  } catch {
    // ignore storage errors
  }
};

const fetchRates = async () => {
  const response = await fetch("https://open.er-api.com/v6/latest/MXN");
  const data = await response.json();
  if (data.result !== "success" || !data.rates) {
    throw new Error("Invalid API response");
  }
  const filtered = {};
  for (const code of CURRENCY_CODES) {
    if (data.rates[code]) {
      filtered[code] = data.rates[code];
    }
  }
  filtered.MXN = 1;
  return filtered;
};

export const getCurrencyInfo = (code) =>
  CURRENCIES.find((c) => c.code === code) || CURRENCIES[0];

export const formatPrice = (amountMXN, currencyCode, rates) => {
  if (!rates || !rates[currencyCode]) return null;
  const converted = Math.round(amountMXN * rates[currencyCode]);
  const info = getCurrencyInfo(currencyCode);
  const formatted = converted.toLocaleString("es-MX");
  return { value: converted, formatted, symbol: info.symbol, code: currencyCode };
};

export const useCurrency = () => {
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem("racoondevs_currency");
      if (saved && CURRENCY_CODES.has(saved)) return saved;
    } catch {
      // ignore
    }
    return detectCurrency();
  });
  const [rates, setRates] = useState(() => getCachedRates());
  const [loading, setLoading] = useState(!getCachedRates());

  useEffect(() => {
    const cached = getCachedRates();
    if (cached) {
      setRates(cached);
      setLoading(false);
      return;
    }

    let cancelled = false;
    fetchRates()
      .then((data) => {
        if (cancelled) return;
        setRates(data);
        setCachedRates(data);
      })
      .catch(() => {
        // On error, use fallback rates (approximate)
        if (cancelled) return;
        setRates({
          MXN: 1,
          USD: 0.056,
          CAD: 0.078,
          EUR: 0.049,
          COP: 208,
          PEN: 0.195,
          ARS: 82,
          BRL: 0.294,
        });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const selectCurrency = useCallback((code) => {
    if (CURRENCY_CODES.has(code)) {
      setCurrency(code);
      try {
        localStorage.setItem("racoondevs_currency", code);
      } catch {
        // ignore
      }
    }
  }, []);

  const convert = useCallback(
    (amountMXN) => formatPrice(amountMXN, currency, rates),
    [currency, rates],
  );

  return {
    currency,
    selectCurrency,
    rates,
    loading,
    convert,
    currencyInfo: getCurrencyInfo(currency),
  };
};
