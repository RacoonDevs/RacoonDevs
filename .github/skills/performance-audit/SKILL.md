---
name: performance-audit
description: "Use when: auditing web performance, Core Web Vitals, LCP, INP, CLS, FID, Largest Contentful Paint, page speed, render-blocking, image optimization, WebP, lazy loading, font loading, script defer async, resource hints preload prefetch, bundle size, Lighthouse, Google PageSpeed, fluidez, rendimiento web, tiempo de carga"
argument-hint: "File or component to audit (e.g. index.html, src/pages/HomePage.jsx)"
---

# Performance Audit Skill

Auditoría de rendimiento centrada en las métricas que Google usa como señales de ranking: **Core Web Vitals** y experiencia de página.

## Por qué importa para SEO

Google usa Core Web Vitals como señal de ranking desde 2021 (Page Experience Update):

- **LCP** (Largest Contentful Paint) < 2.5s → imagen de hero, H1, imagen principal
- **INP** (Interaction to Next Paint) < 200ms → respuesta a clicks/taps
- **CLS** (Cumulative Layout Shift) < 0.1 → estabilidad visual al cargar

Un sitio lento pierde posiciones aunque tenga SEO perfecto.

## Procedimiento completo

### 1. Auditar `index.html` — Carga crítica

Lee el `index.html` y verifica:

**Scripts:**

```html
<!-- ✅ Correcto -->
<script type="module" src="/src/main.jsx"></script>
<!-- Vite: automáticamente deferred -->

<!-- 🔴 Evitar -->
<script src="analytics.js"></script>
<!-- Bloquea render -->
```

- [ ] Scripts de terceros (analytics, chat, maps) tienen `defer` o `async`
- [ ] El script de tema inicial (si detecta dark mode) es inline mínimo y no bloquea
- [ ] No hay `<link rel="stylesheet">` de terceros sin `media` attribute o carga diferida

**Fonts:**

```html
<!-- ✅ Óptimo -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="font"
  href="/fonts/main.woff2"
  type="font/woff2"
  crossorigin
/>
```

- [ ] `preconnect` a dominios de fuentes externos
- [ ] `font-display: swap` en CSS para evitar FOIT (Flash of Invisible Text)
- [ ] Máximo 2 familias de fuentes, máximo 3 variantes cada una

**Resource Hints:**

```html
<link rel="preload" as="image" href="/hero.webp" fetchpriority="high" />
<link rel="preload" as="image" href="/logo.svg" />
<link rel="dns-prefetch" href="https://api.appwrite.io" />
```

- [ ] La imagen LCP tiene `rel="preload"` y `fetchpriority="high"`
- [ ] DNS prefetch para dominios de API/CDN externos

### 2. Auditar imágenes

Busca en los componentes React y JSX:

```jsx
// 🔴 Problemas comunes
<img src="foto.png" />                    // sin WebP, sin dimensiones
<img src="foto.jpg" loading="eager" />   // LCP candidate sin preload
<img src={bigImage} />                   // imagen grande sin srcset

// ✅ Óptimo
<img
  src="foto.webp"
  srcSet="foto-400.webp 400w, foto-800.webp 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  width="800"
  height="600"
  loading="lazy"       // excepto la imagen hero/LCP
  decoding="async"
  alt="descripción"
/>
```

Verifica en `public/` y `src/assets/`:

- [ ] Todas las imágenes son `.webp` o `.avif` (PNG/JPG solo como fallback)
- [ ] La imagen hero/principal NO tiene `loading="lazy"` (es el LCP)
- [ ] Todas las imágenes tienen `width` y `height` explícitos (previene CLS)
- [ ] Imágenes below-the-fold tienen `loading="lazy"`
- [ ] No hay imágenes > 200KB en mobile viewports

### 3. Auditar animaciones y CLS

Busca fuentes de Layout Shift:

```css
/* 🔴 Causan CLS */
.element {
  font-size: calc(/* dinámico */);
}
img {
  /* sin width/height */
}

/* ✅ Correcto */
.skeleton {
  width: 100%;
  aspect-ratio: 16/9;
} /* reserva espacio */
```

- [ ] Skeletons/placeholders reservan el espacio antes de cargar contenido
- [ ] Banners, modales y elementos dinámicos no desplazan contenido existente
- [ ] Fuentes web usan `font-display: swap` y `size-adjust` si es necesario

### 4. Auditar bundle y code splitting

En `vite.config.js`:

```js
// ✅ Óptimo para SEO/performance
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
};
```

- [ ] Vendor chunk separado del código de aplicación
- [ ] Rutas/páginas usan `React.lazy` + `Suspense` para code splitting
- [ ] No hay imports de librerías enteras cuando solo se usa una función

### 5. Auditar animaciones con Framer Motion

Si el proyecto usa Framer Motion:

```jsx
// ✅ No bloquea INP — usa GPU
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}  // < 300ms para no sentirse lento
/>

// 🔴 Evitar en elementos interactivos frecuentes
whileHover={{ scale: 1.05 }}  // en listas largas, afecta INP
```

- [ ] Las animaciones de página usan `transform` y `opacity` únicamente (no `width`, `height`, `top`, `left`)
- [ ] `AnimatePresence` no wrappea listas largas innecesariamente
- [ ] `transition.duration` < 0.4s en interacciones del usuario

### 6. Auditar CSS crítico

- [ ] CSS crítico above-the-fold está inline o en un chunk separado de prioridad alta
- [ ] Tailwind está configurado con `content` paths correctos (no genera clases no usadas en producción)
- [ ] No hay `@import` dentro de stylesheets (bloquea render)

## Output esperado

```
### Core Web Vitals Risk Assessment
LCP risk: [bajo/medio/alto] — causa: [imagen/font/script]
INP risk: [bajo/medio/alto] — causa: [animaciones/event handlers]
CLS risk: [bajo/medio/alto] — causa: [imágenes/fonts/dinámico]

### Problemas encontrados
[Lista con severidad, causa y fix concreto]

### Cambios de mayor impacto
1. [Fix más impactante con código]
2. [Segundo fix]
3. [Tercer fix]
```
