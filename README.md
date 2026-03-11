# RacoonDevs Landing

Landing page de RacoonDevs con formulario de contacto usando Appwrite Function.

## Estructura

```
racoondevs/
├── front/
│   ├── src/
│   │   └── services/contactFormClient.js
│   ├── functions/
│   │   └── contact-form/
│   │       ├── src/main.js
│   │       ├── package.json
│   │       ├── .env
│   │       ├── .env.example
│   │       └── README.md
│   ├── .env
│   └── package.json
└── README.md
```

## Frontend env (`front/.env`)

```env
VITE_RECAPTCHA_SITE_KEY=
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_CONTACT_FUNCTION_ID=
```

## Flujo del formulario

1. React obtiene token de reCAPTCHA v3.
2. React ejecuta la Appwrite Function por REST (`/functions/{id}/executions`).
3. La function valida payload, verifica reCAPTCHA server-side y envia correos.

## Configuracion de la function

Todo el detalle (seguridad, scopes, variables, deploy) esta en:

- `front/functions/contact-form/README.md`

## Desarrollo frontend

```bash
cd front
npm install
npm run dev
```

## Build frontend

```bash
cd front
npm run build
```
