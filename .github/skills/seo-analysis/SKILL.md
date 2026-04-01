---
name: seo-analysis
description: "Use when: auditing SEO tags, meta tags, structured data, JSON-LD, schema.org, Open Graph, Twitter cards, canonical URL, robots meta, sitemap, keyword analysis, title length, description length, hreflang, indexability, rich snippets, posicionamiento Google, metas, SEO técnico"
argument-hint: "File or URL to audit (e.g. index.html, src/pages/HomePage.jsx)"
---

# SEO Analysis Skill

Auditoría completa de todos los factores de SEO técnico en páginas y archivos del proyecto.

## Procedimiento completo

### 1. Recopilar archivos clave

Lee en paralelo:

- `index.html` — meta tags globales, structured data base
- `public/robots.txt` — directivas de rastreo
- `public/sitemap.xml` — estructura de URLs indexadas
- Componente `SEOHead.jsx` o similar — meta tags dinámicos por página
- Archivos de datos SEO (`src/data/seoData.js` o equivalente)

### 2. Auditar Title y Meta Description

| Campo              | Óptimo                         | Máximo         |
| ------------------ | ------------------------------ | -------------- |
| `<title>`          | 50-60 caracteres               | 60 caracteres  |
| `meta description` | 150-160 caracteres             | 160 caracteres |
| `meta keywords`    | Presencia de keyword principal | —              |

Verifica:

- [ ] El `<title>` incluye la keyword principal al inicio
- [ ] La meta description contiene un CTA implícito y la keyword geo-local
- [ ] No hay títulos duplicados entre páginas
- [ ] El title del `<head>` base y el definido por react-helmet-async/react-helmet no entran en conflicto

### 3. Auditar Structured Data (JSON-LD)

Tipos que Google prioriza para negocios locales:

- `Organization` — logo, contacto, redes sociales, sameAs
- `LocalBusiness` / `ProfessionalService` — dirección, horario, aggregateRating
- `WebSite` — nombre, URL, SearchAction (sitelinks)
- `BreadcrumbList` — navegación jerárquica en páginas internas
- `FAQPage` — para páginas de preguntas frecuentes
- `Service` — para páginas de servicios individuales
- `Review` / `AggregateRating` — testimoniales validados

Verifica:

- [ ] Todos los required fields están presentes (no warnings en Schema Validator)
- [ ] `aggregateRating.reviewCount` coincide con testimoniales reales
- [ ] `sameAs` enlaza a perfiles verificados
- [ ] `areaServed` cubre las regiones objetivo
- [ ] No hay campos vacíos o con valores genéricos ("string", "url")

### 4. Auditar Open Graph y Twitter Cards

```
og:type, og:url, og:title, og:description, og:image (1200x630px), og:image:alt
twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image
```

Verifica:

- [ ] La imagen OG tiene exactamente 1200×630 px y pesa < 300 KB
- [ ] `og:url` usa URL canónica con https://
- [ ] Twitter card usa `summary_large_image`
- [ ] Cada página tiene OG/Twitter específicos (no solo el default de index.html)

### 5. Auditar Canonical y Hreflang

- [ ] `<link rel="canonical" href="...">` presente en cada página
- [ ] La URL canónica es https:// sin parámetros de rastreo
- [ ] Si hay versión www y sin www, el canonical apunta siempre al mismo
- [ ] Si el sitio es multiidioma, verificar `hreflang` correcto

### 6. Auditar robots.txt

Debe permitir rastreo de:

- `/` (home)
- `/sitemap.xml`
- CSS y JS críticos (no bloquear assets que Google necesita renderizar)

Debe bloquear:

- `/admin/`, `/api/`, `/.env`, rutas de desarrollo

### 7. Auditar sitemap.xml

- [ ] Todas las páginas públicas están incluidas
- [ ] Las URLs usan https:// y el dominio canónico
- [ ] `<lastmod>` refleja fechas reales de actualización
- [ ] `<changefreq>` y `<priority>` son coherentes (homepage = 1.0, otras = 0.8-0.6)
- [ ] El sitemap está declarado en robots.txt: `Sitemap: https://dominio.com/sitemap.xml`

### 8. Auditar Keywords y Contenido

- [ ] La keyword principal aparece en H1, title, primera oración del primer párrafo
- [ ] Keywords geo-locales presentes en meta description y H2s
- [ ] No hay keyword stuffing (densidad > 3-4%)
- [ ] Cada página tiene un propósito y keyword diferente (no canibalización)

### 8b. Auditar Lenguaje Accesible (copywriting SEO)

El público objetivo son **dueños de negocios y emprendedores, no desarrolladores**. Todo texto visible debe ser comprensible sin conocimientos técnicos:

- [ ] H1, H2 y H3 usan lenguaje natural, no jerga técnica
- [ ] Meta descriptions suenan como la respuesta que un usuario buscaría en Google
- [ ] Títulos combinan keyword SEO con lenguaje cotidiano
- [ ] Términos técnicos están explicados o sustituidos por equivalentes simples:
  - ❌ "Landing pages" → ✅ "Páginas de venta"
  - ❌ "UI/UX responsivo" → ✅ "Diseño que se ve bien en celular y computadora"
  - ❌ "APIs RESTful" → ✅ "Conexiones entre sistemas"
  - ❌ "PWA" → ✅ "Aplicaciones web que funcionan como apps"
- [ ] Tono profesional pero cercano — expertise sin intimidar
- [ ] Jerga técnica SÍ permitida en: JSON-LD, meta keywords, código fuente, atributos `alt` de contexto técnico

### 9. Auditar Google Meta Especiales

```html
<meta
  name="robots"
  content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
/>
<meta name="googlebot" content="index, follow" />
<!-- si aplica -->
<meta name="geo.region" content="MX-JAL" />
<meta name="geo.placename" content="Puerto Vallarta" />
<meta name="geo.position" content="20.6597;-105.2253" />
<meta name="ICBM" content="20.6597, -105.2253" />
```

## Output esperado

Reporta usando este formato para cada sección:

```
### [Sección] — Estado: 🔴/🟡/🟢/✅
Problema: [descripción concisa]
Impacto en ranking: [alto/medio/bajo]
Fix: [código o acción específica]
```

Termina con tabla resumen y los 3 cambios de mayor impacto inmediato.
