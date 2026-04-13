import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MassTimesGrid from "@/components/MassTimesGrid";
import ChurchCards from "@/components/ChurchCards";
import LatestNotices from "@/components/LatestNotices";
import QuickLinks from "@/components/QuickLinks";
import WelcomeSection from "@/components/WelcomeSection";
import heroImage from "@/assets/hero-parish.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <SEOHead
        title="Abbeyleix Parish — Six Churches, One Community"
        description="Abbeyleix Parish serves six Catholic churches in south County Laois: Abbeyleix, Ballyroan, Ballinakill, Knock, Shanahoe, and Raheen. Find Mass times, notices, sacraments, and heritage."
        path="/"
      />
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center"
          aria-label="Welcome"
        >
          <img
            src={heroImage}
            alt="Church of the Most Holy Rosary, Abbeyleix, in morning light"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={864}
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative z-10 text-center px-4 py-16">
            <h1 className="text-primary-foreground mb-4 drop-shadow-lg">Abbeyleix Parish</h1>
            <p className="font-sans text-2xl md:text-3xl text-primary-foreground font-semibold max-w-2xl mx-auto mb-2 drop-shadow">
              Six churches. One parish family.
            </p>
            <p className="font-sans text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 drop-shadow">
              Serving Abbeyleix, Ballyroan, Ballinakill, Knock, Shanahoe and Raheen
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#mass-times-heading"
                className="inline-flex items-center px-6 py-3 rounded bg-secondary text-secondary-foreground font-sans font-semibold text-base no-underline hover:bg-secondary/90 transition-colors"
              >
                Mass Times
              </a>
              <Link
                to="/webcam"
                className="inline-flex items-center px-6 py-3 rounded border-2 border-primary-foreground/60 text-primary-foreground font-sans font-medium text-base no-underline hover:bg-primary-foreground/10 transition-colors"
              >
                Watch Mass Live
              </Link>
            </div>
          </div>
        </section>

        <MassTimesGrid />
        <ChurchCards />
        <QuickLinks />
        <LatestNotices />
        <WelcomeSection />
      </main>
      <SiteFooter />
    </>
  );
}
