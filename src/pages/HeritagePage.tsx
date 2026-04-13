import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { churches } from "@/data/churches";
import { Link } from "react-router-dom";
import churchPlaceholder from "@/assets/church-placeholder.jpg";

export default function HeritagePage() {
  return (
    <>
      <SEOHead
        title="Heritage of Our Six Churches — Abbeyleix Parish"
        description="The architectural and historical heritage of Abbeyleix Parish's six churches in south County Laois — from the Penal era to the present day."
        path="/heritage"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding max-w-4xl mx-auto">
        <h1 className="text-primary mb-6">Heritage of Our Six Churches</h1>
        <div className="space-y-4 mb-12">
          <p className="font-sans text-lg text-foreground/85 leading-relaxed">
            Our parish family includes six churches with deep roots in the
            landscape and history of County Laois. From the famine-era walls of
            St Laserian's at Knock, to the Penal-era Mass Pit at Raheen, to the
            Hiberno-Romanesque masterpiece of Holy Rosary in Abbeyleix —
            each church has its own story to tell.
          </p>
          <p className="font-sans text-foreground/85 leading-relaxed">
            A full heritage section is in preparation, and will include the
            architecture, the patron saints, the stained glass windows, and the
            remarkable people who built and sustained each of our churches over
            the generations.
          </p>
          <p className="font-sans text-foreground/85 leading-relaxed">
            In the meantime, you can read about each church on its own page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church) => (
            <Link
              key={church.slug}
              to={`/churches/${church.slug}`}
              className="group block rounded-lg border border-border bg-card overflow-hidden no-underline hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={church.heroImage || churchPlaceholder}
                  alt={`${church.fullName}, ${church.village}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                  {church.fullName}
                </h2>
                <p className="text-sm font-sans text-muted-foreground mb-2">{church.village} · {church.builtYear}</p>
                <span className="text-sm font-sans font-medium text-primary">
                  Read the story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
