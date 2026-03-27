import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackAnalyticsEvent } from "../../services/analyticsClient";

const CTA_PATH_PATTERN = /\/(contacto|cuentanos-tu-idea)(\/|$)/i;

const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

const getPathWithSearch = (location) => `${location.pathname || "/"}${location.search || ""}`;

const trackSectionViews = (path) => {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
    return () => {};
  }

  const observed = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.6) {
          return;
        }

        const sectionId = normalizeText(entry.target?.id);
        if (!sectionId || observed.has(sectionId)) {
          return;
        }

        observed.add(sectionId);
        trackAnalyticsEvent("section_view", {
          path,
          section: sectionId,
        });
      });
    },
    { threshold: [0.6] },
  );

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
};

const getClickPayload = (target, path) => {
  const clickable = target?.closest?.("a,button");
  if (!clickable) {
    return null;
  }

  const href = normalizeText(clickable.getAttribute("href"));
  const explicitKey = normalizeText(clickable.getAttribute("data-analytics-click"));
  const isTrackedHref = CTA_PATH_PATTERN.test(href) || href.startsWith("mailto:");

  if (!explicitKey && !isTrackedHref) {
    return null;
  }

  const label = normalizeText(clickable.textContent).slice(0, 100);
  const section = normalizeText(clickable.closest?.("section[id]")?.id || "");
  const elementId = normalizeText(clickable.id || explicitKey || href).slice(0, 120);

  return {
    path,
    section,
    elementId,
    label,
    metadata: {
      href,
      tag: clickable.tagName?.toLowerCase?.() || "",
    },
  };
};

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = getPathWithSearch(location);
    trackAnalyticsEvent("page_view", { path });

    const stopObservingSections = trackSectionViews(path);

    const onDocumentClick = (event) => {
      const payload = getClickPayload(event.target, path);
      if (!payload) return;
      trackAnalyticsEvent("cta_click", payload);
    };

    document.addEventListener("click", onDocumentClick, true);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      stopObservingSections();
    };
  }, [location.pathname, location.search]);

  return null;
}
