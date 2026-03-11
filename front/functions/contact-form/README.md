# Contact Form Appwrite Function

Function de Appwrite para procesar el formulario de contacto de RacoonDevs.

## Estructura

```
front/functions/contact-form/
├── src/main.js
├── package.json
├── .env
└── .env.example
```

## Variables de entorno

### Obligatorias

- `RECAPTCHA_SECRET_KEY`: secret key de reCAPTCHA v3.
- `EMAIL_SERVICE`: `smtp`, `gmail`, `sendgrid` o `console`.

### SMTP / Gmail

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE` (`true`/`false`)
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`
- `EMAIL_TO`

### SendGrid

- `SENDGRID_API_KEY` (solo si `EMAIL_SERVICE=sendgrid`)

Si vas a usar IONOS SMTP (`EMAIL_SERVICE=smtp`), deja `SENDGRID_API_KEY` vacio.
No se usa en ese modo.

### API key de Appwrite (opcional)

- `APPWRITE_API_KEY` (solo si la function llamara servicios internos de Appwrite).
- Se crea en `Appwrite Console > Project > API Keys`.
- Asigna scopes minimos (principio de minimo privilegio).

### Seguridad y comportamiento

- `CONTACT_ALLOWED_ORIGINS`: lista separada por comas.
- `CONTACT_SEND_CLIENT_CONFIRMATION`: `true` o `false`.

## Seguridad (API key, scopes y permisos)

### Esta implementacion (actual)

- No usa SDK server de Appwrite dentro de la function.
- No requiere `APPWRITE_API_KEY`.
- No requiere scopes de Appwrite para recursos internos.
- Debes permitir ejecucion de function desde cliente:
  - Permission recomendada: `any` (por ser formulario publico).
  - Proteccion principal: validacion + reCAPTCHA + filtro de origin.

### Si quieres usar servicios internos de Appwrite

Agrega `APPWRITE_API_KEY` y solo los scopes minimos necesarios, por ejemplo:

- `databases.read` / `databases.write`
- `users.read`
- `messages.write`

No uses scopes extra si no son necesarios.

## Payload esperado

```json
{
  "name": "string",
  "email": "string",
  "projectType": "web|mobile|ecommerce|custom|redesign|other",
  "budget": "5k-15k|15k-30k|30k-50k|50k+|discuss",
  "message": "string",
  "recaptchaToken": "string",
  "source": "racoondevs-landing",
  "submittedAt": "ISO date"
}
```

## Respuesta

- `200`: `success: true` y mensaje de confirmacion.
- `400`: validacion o reCAPTCHA invalido.
- `403`: origin no permitido.
- `405`: metodo no permitido.
- `500`: error interno o fallo de email.

## Deploy rapido en Appwrite

1. Crear function (`Node.js` runtime).
2. Subir el contenido de `front/functions/contact-form`.
3. Entry point: `src/main.js`.
4. Instalar dependencias (`npm install`).
5. Configurar variables de entorno.
6. Configurar permisos de ejecucion.
7. Copiar el Function ID y usarlo en `front/.env` como `VITE_APPWRITE_CONTACT_FUNCTION_ID`.
