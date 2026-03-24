import { Helmet } from "react-helmet-async";

const SEOHead = ({ title, description, canonical, ogImage, jsonLd }) => (
  <Helmet>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {canonical && <link rel="canonical" href={canonical} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {canonical && <meta property="og:url" content={canonical} />}
    {ogImage && <meta property="og:image" content={ogImage} />}
    {title && <meta property="twitter:title" content={title} />}
    {description && <meta property="twitter:description" content={description} />}
    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default SEOHead;
