import { Helmet } from "react-helmet-async";

const SEOHead = ({ title, description, canonical, ogImage, jsonLd }) => (
  <Helmet>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {canonical && <link rel="canonical" href={canonical} />}

    {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {canonical && <meta property="og:url" content={canonical} />}
    {ogImage && <meta property="og:image" content={ogImage} />}
    {ogImage && <meta property="og:image:secure_url" content={ogImage} />}
    {ogImage && <meta property="og:image:type" content="image/webp" />}
    {ogImage && <meta property="og:image:width" content="1200" />}
    {ogImage && <meta property="og:image:height" content="630" />}
    {ogImage && (
      <meta
        property="og:image:alt"
        content="Racoon Devs - Desarrollo Web y Apps en Puerto Vallarta"
      />
    )}

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    {title && <meta property="twitter:title" content={title} />}
    {description && (
      <meta property="twitter:description" content={description} />
    )}
    {ogImage && <meta property="twitter:image" content={ogImage} />}
    {ogImage && (
      <meta
        property="twitter:image:alt"
        content="Racoon Devs - Desarrollo Web y Apps en Puerto Vallarta"
      />
    )}

    {/* Schema.org (Google+, algunos scrapers) */}
    {title && <meta itemProp="name" content={title} />}
    {description && <meta itemProp="description" content={description} />}
    {ogImage && <meta itemProp="image" content={ogImage} />}

    {/* WhatsApp / Telegram fallback */}
    {ogImage && <link rel="image_src" href={ogImage} />}

    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default SEOHead;
