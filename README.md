# 🦝 RacoonDevs Landing Page

Landing page profesional para RacoonDevs con formulario de contacto integrado y reCAPTCHA.

## 🏗️ Estructura del Proyecto

```
racoondevs/
├── front/                  # Frontend (React + Vite + TailwindCSS)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── back/                   # Backend (Express.js API)
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── package.json           # Scripts principales
```

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm run install-all
```

### 2. Configurar variables de entorno

**Frontend (`front/.env`):**

```env
VITE_RECAPTCHA_SITE_KEY=6LeOvJorAAAAADkhmpVoWZWHTTT4SLx-RgDMpguH
```

**Backend (`back/.env`):**

```env
PORT=3001
NODE_ENV=development

# reCAPTCHA
VITE_RECAPTCHA_SECRET_KEY=6LeOvJorAAAAAC_EADMj2J98idJ19qEJcu30BTep

# Email (configura según tu proveedor)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@racoondevs.com
EMAIL_TO=admin@racoondevs.com
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Esto iniciará:

- Frontend en `http://localhost:5173`
- Backend en `http://localhost:3001`

## 📧 Configuración de Email

### Opción 1: Gmail (Recomendado para desarrollo)

1. Activa la verificación en 2 pasos
2. Genera una "Contraseña de aplicación"
3. Configura en `back/.env`:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-app
```

### Opción 2: SMTP Personalizado

```env
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.tu-proveedor.com
SMTP_PORT=587
EMAIL_USER=tu-usuario
EMAIL_PASS=tu-contraseña
```

### Opción 3: SendGrid

```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=tu-api-key
```

## 🛡️ Configuración de reCAPTCHA

1. Ve a [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Crea un nuevo sitio (reCAPTCHA v2)
3. Agrega tus dominios:
   - `localhost` (desarrollo)
   - `tu-dominio.com` (producción)
4. Copia las claves a los archivos `.env`

## 🔧 Scripts Disponibles

```bash
# Instalar todas las dependencias
npm run install-all

# Desarrollo (frontend + backend)
npm run dev

# Solo frontend
npm run dev:front

# Solo backend
npm run dev:back

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📂 Características

### Frontend

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 19** - Última versión con hooks
- 🎨 **TailwindCSS v4** - Estilos modernos
- 🎭 **Framer Motion** - Animaciones suaves
- 🎯 **Lucide React** - Iconos profesionales
- 🛡️ **reCAPTCHA v2** - Protección anti-spam

### Backend

- 🚀 **Express.js** - Framework minimalista
- 🛡️ **Helmet** - Seguridad HTTP
- ⏱️ **Rate Limiting** - Protección contra spam
- 📧 **Nodemailer** - Envío de emails
- ✅ **Validación** - Sanitización de datos
- 🔒 **CORS** - Configuración segura

## 🚀 Despliegue

### Frontend

- **Vercel**: Conecta tu repo y despliega automáticamente
- **Netlify**: Build command: `npm run build`, Publish dir: `front/dist`

### Backend

- **Railway**: Conecta tu repo, detecta Express automáticamente
- **Render**: Dockerfile o Node.js deployment
- **Heroku**: Agrega buildpack de Node.js

### Variables de Entorno en Producción

Asegúrate de configurar todas las variables de `.env` en tu plataforma de hosting.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ver [LICENSE.md](LICENSE.md) para detalles.

## 👥 Equipo RacoonDevs

- **Website**: [racoondevs.com](https://racoondevs.com)
- **Email**: admin@racoondevs.com
- **Teléfono**: +52 322 265 2650
- **Ubicación**: Puerto Vallarta, Jalisco, México

---

Hecho con ❤️ por RacoonDevs 🦝
