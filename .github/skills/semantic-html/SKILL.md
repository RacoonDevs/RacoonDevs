---
name: semantic-html
description: "Use when: auditing semantic HTML, heading hierarchy, H1 H2 H3 structure, landmark elements, header nav main footer aside section article, ARIA labels roles, accessibility, HTML5 semantics, screen readers, Google crawl structure, figure figcaption, form labels, HTML semántico correcto, estructura semántica, accesibilidad web, etiquetas semánticas"
argument-hint: "Component or page file to audit (e.g. src/pages/HomePage.jsx, src/components/layout/Header.jsx)"
---

# Semantic HTML Skill

Auditoría de estructura semántica HTML. Google usa la semántica para entender la jerarquía, importancia y propósito del contenido — es un factor crítico de indexación y relevancia.

## Por qué importa para SEO

- El H1 le dice a Google el tema principal de la página → keyword más importante va aquí
- Los landmarks (header, nav, main, footer) ayudan al crawler a ignorar navegación y enfocarse en contenido
- ARIA solo donde el HTML semántico no es suficiente — Google lo usa para entender roles
- HTML semántico correcto = mejor accesibilidad = mejor Core Web Vitals = mejor ranking

## Procedimiento completo

### 1. Inventariar la estructura de la página

Para cada página/componente, lee:

1. El componente de página principal (`src/pages/`)
2. El layout wrapper (`src/components/layout/`)
3. Las secciones principales (`src/components/sections/`)

### 2. Auditar jerarquía de encabezados

**Reglas absolutas:**

```jsx
// ✅ Correcto — una sola H1 por página
<h1>Desarrolladores Web en Puerto Vallarta</h1>
  <h2>Nuestros Servicios</h2>
    <h3>Desarrollo Web</h3>
    <h3>Apps Móviles</h3>
  <h2>Por Qué Elegirnos</h2>
    <h3>Experiencia comprobada</h3>

// 🔴 Errores críticos
<h2>Servicios</h2>          // primera sección sin H1 previo
<h1>Servicios</h1>          // segunda H1 en la misma página
<h4>Detalle</h4>            // salta de H2 a H4
```

Verifica:

- [ ] **Exactamente un `<h1>` por página** — es el tema principal para Google
- [ ] El H1 contiene la keyword principal de la página
- [ ] Los H2 son subtemas del H1
- [ ] Los H3 son subtemas del H2 que los contiene
- [ ] No se salta niveles (H1 → H3 sin H2)
- [ ] Los headings no se usan para estilo sino para estructura — usar clases CSS para el look
- [ ] **Lenguaje accesible**: los headings deben ser comprensibles para un usuario no técnico (dueños de negocio, emprendedores). Evitar jerga como "UI/UX", "API", "PWA" en textos visibles sin explicación. Combinar keywords SEO con lenguaje natural y cercano.

### 3. Auditar Landmarks HTML5

```jsx
// ✅ Estructura de página óptima para Google
<body>
  <header>
    {" "}
    {/* Logo, branding, navegación principal */}
    <nav aria-label="Navegación principal">
      <ul>...</ul>
    </nav>
  </header>

  <main>
    {" "}
    {/* Contenido único de esta página */}
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">...</h1>
    </section>
    <section aria-labelledby="services-heading">
      <h2 id="services-heading">Servicios</h2>
    </section>
  </main>

  <aside aria-label="Información adicional">
    {" "}
    {/* Contenido complementario */}
    ...
  </aside>

  <footer>
    {" "}
    {/* Info legal, links secundarios */}
    <nav aria-label="Navegación secundaria">...</nav>
  </footer>
</body>
```

Verifica:

- [ ] `<header>` wrappea logo + navegación principal (no repetido innecesariamente)
- [ ] `<nav>` con `aria-label` distinto para cada navegación de la página
- [ ] `<main>` existe, es único por página, contiene el contenido distintivo
- [ ] `<footer>` al final con info corporativa y links secundarios
- [ ] `<section>` tiene su propio heading (`aria-labelledby` o heading hijo directo)
- [ ] `<article>` para contenido independiente (posts, testimoniales, cards de portfolio)
- [ ] `<aside>` para contenido relacionado pero no principal

### 4. Auditar uso semántico de listas

```jsx
// ✅ Navegación como lista
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/servicios">Servicios</a></li>
  </ul>
</nav>

// ✅ Features/ventajas como lista
<ul>
  <li>Entrega en 2 semanas</li>
  <li>Soporte 24/7</li>
</ul>

// 🔴 Evitar — lista de items sin semántica de lista
<div>
  <p>• Entrega en 2 semanas</p>
  <p>• Soporte 24/7</p>
</div>
```

### 5. Auditar imágenes semánticas

```jsx
// ✅ Imagen de contenido con descripción
<figure>
  <img src="portfolio-proyecto.webp" alt="Dashboard analytics desarrollado para TechCorp, Puerto Vallarta" />
  <figcaption>Dashboard analytics — TechCorp, 2024</figcaption>
</figure>

// ✅ Imagen decorativa — no describe nada útil
<img src="background-pattern.svg" alt="" role="presentation" />

// 🔴 Error crítico — sin alt
<img src="servicio.webp" />

// 🔴 Error — alt genérico no descriptivo
<img src="foto.webp" alt="imagen" />
```

Verifica:

- [ ] Todas las imágenes de contenido tienen `alt` descriptivo con keywords donde aplique
- [ ] Imágenes decorativas tienen `alt=""` (alt vacío, no ausente)
- [ ] `<figure>` + `<figcaption>` para imágenes de portfolio/portfolio con contexto

### 6. Auditar formularios

```jsx
// ✅ Correcto
<form>
  <label htmlFor="email">Correo electrónico</label>
  <input id="email" type="email" name="email" autocomplete="email" required />

  <label htmlFor="message">Mensaje</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Enviar mensaje</button>
</form>

// 🔴 Errores comunes
<input placeholder="Email" />              // sin label — no accesible
<div onClick={submit}>Enviar</div>         // no es botón — no activable con teclado
```

Verifica:

- [ ] Todo `<input>` y `<textarea>` tiene `<label>` asociado via `htmlFor`/`id`
- [ ] Los campos tienen `type` correcto (email, tel, text, etc.)
- [ ] El submit es `<button type="submit">` o `<input type="submit">`
- [ ] `autocomplete` está presente en campos de contacto

### 7. Auditar ARIA (solo donde HTML no alcanza)

```jsx
// ✅ ARIA necesario — componente custom no semántico
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Cotización</h2>
</div>

// ✅ Estado dinámico
<button aria-expanded={isOpen} aria-controls="menu-id">Menú</button>
<ul id="menu-id" hidden={!isOpen}>...</ul>

// 🔴 ARIA redundante — ya es semántico
<button role="button">Click</button>   // redundante
<nav role="navigation">...</nav>       // redundante
<h1 role="heading">Título</h1>         // redundante
```

### 8. Auditar componentes React específicos

Para este proyecto, verifica en:

- `Header.jsx` — ¿Usa `<header>` y `<nav>`?
- `Footer.jsx` — ¿Usa `<footer>`?
- `HeroSection.jsx` — ¿Tiene el H1 de la home?
- `*Section.jsx` — ¿Cada sección usa `<section>` con heading propio?
- Componentes de UI (`GlassCard`, `FloatingCard`) — ¿Son `<article>` o `<div>` según su contenido?

## Output esperado

```
### Jerarquía de Encabezados — Estado: 🔴/🟡/✅
[Árbol visual de los headings encontrados]
Problema: [si hay alguno]
Fix: [cambio específico]

### Landmarks — Estado: 🔴/🟡/✅
[Lista de landmarks encontrados vs esperados]

### Problemas de accesibilidad con impacto SEO
[Lista priorizada]

### Estructura ideal recomendada
[Árbol semántico sugerido para la página]
```
