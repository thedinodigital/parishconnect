import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

interface ComingSoonProps {
  title: string;
  description: string;
  path: string;
}

export default function ComingSoon({ title, description, path }: ComingSoonProps) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} />
      <SiteHeader />
      <main id="main-content" className="container section-padding text-center">
        <h1 className="text-primary mb-4">{title}</h1>
        <p className="font-sans text-muted-foreground max-w-lg mx-auto mb-8">
          This page is coming soon. In the meantime, please contact the parish office for any enquiries.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 rounded bg-primary text-primary-foreground font-sans font-semibold no-underline hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
