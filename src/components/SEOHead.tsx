import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

export default function SEOHead({ title, description, path, type = "website" }: SEOHeadProps) {
  const siteUrl = "https://abbeyleixparish.ie";
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} — Abbeyleix Parish`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Abbeyleix Parish" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
