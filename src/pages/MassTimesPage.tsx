import { churches, formatTime } from "@/data/churches";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const dayNames: Record<string, string> = {
  Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
  Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
};

export default function MassTimesPage() {
  return (
    <>
      <SEOHead
        title="Mass Times"
        description="Full Mass schedule for all six churches in Abbeyleix Parish: Abbeyleix, Ballyroan, Ballinakill, Knock, Shanahoe, and Raheen."
        path="/mass-times"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding">
        <h1 className="text-center text-primary mb-4">Mass Times</h1>
        <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto">
          Full weekly Mass schedule for all six churches in Abbeyleix Parish, Diocese of Kildare &amp; Leighlin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {churches.map((church) => {
            const sorted = [...church.massTimes].sort(
              (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
            );
            return (
              <article key={church.slug} className="border border-border rounded-lg overflow-hidden bg-card">
                <div className="bg-primary px-5 py-4">
                  <Link to={`/churches/${church.slug}`} className="no-underline">
                    <h2 className="text-lg text-primary-foreground font-serif">{church.fullName}</h2>
                    <p className="text-sm text-primary-foreground/80 font-sans">{church.village}</p>
                  </Link>
                </div>
                <div className="p-5">
                  {sorted.length === 0 ? (
                    <p className="text-sm font-sans text-muted-foreground">Schedule to be confirmed</p>
                  ) : (
                    sorted.map((m, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="font-sans text-sm">{dayNames[m.day]}</span>
                        <div className="text-right">
                          <time dateTime={`${m.day} ${m.time}`} className="font-sans text-sm font-semibold">
                            {formatTime(m.time)}
                          </time>
                          {m.notes && <span className="block text-xs text-muted-foreground">{m.notes}</span>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
