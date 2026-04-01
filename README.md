# RacoonDevs Public Site

Sitio publico en React + Vite con formularios conectados a Appwrite Functions.

## Formularios y CRM

- `/cuentanos-tu-idea` ejecuta `functions/wizard`.
- Landing + `/contacto` ejecutan `functions/contact-form`.
- Analitica frontend ejecuta `functions/analytics`.
- Ambas funciones sincronizan leads al proyecto `crm` via la function `create-lead`.

Variables runtime de sync documentadas en:

- `functions/wizard/.env.example`
- `functions/contact-form/.env.example`
- `functions/analytics/.env.example`

## Analitica hacia CRM

El frontend envia eventos anonimos a `functions/analytics` (mismo proyecto), y esa function sincroniza al CRM (`track-analytics-event`):

- `page_view`
- `section_view`
- `cta_click`
- `form_submit`
- `form_success`
- `form_error`

La function de analytics ahora enriquece cada evento con:

- senales de cliente (UA, idioma, viewport, dispositivo, timezone)
- clasificacion de trafico (`likely_human`, `suspicious`, `likely_bot`)
- geolocalizacion aproximada por IP (pais/region/ciudad y lat/lon aproximado)

Nota: por IP no se obtiene GPS exacto del visitante, solo una aproximacion de red.

Variables frontend relevantes en `.env.example`:

- `VITE_ANALYTICS_ENABLED`
- `VITE_APPWRITE_ANALYTICS_FUNCTION_ID`
- `VITE_ANALYTICS_SITE_ID`

## Comandos

```bash
npm install
npm run dev
npm run build
```
