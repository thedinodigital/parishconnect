import { Link } from "react-router-dom";
import { churches, formatTime, getNextMass } from "@/data/churches";
import { useMemo } from "react";

export default function MassTimesGrid() {
  const nextMass = useMemo(() => getNextMass(), []);

  const dayNames: Record<string, string> = {
    Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
    Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
  };

  // For each church, find the soonest upcoming mass to display
  const upcomingByChurch = useMemo(() => {
    return churches.map((church) => {
      const next = getNextMass(church.slug);
      return { church, next };
    });
  }, []);

  const isNext = (slug: string, day: string, time: string) =>
    nextMass?.church.slug === slug && nextMass.mass.day === day && nextMass.mass.time === time;

  return (
    <section aria-labelledby="mass-times-heading" className="section-padding bg-church-green-light">
      <div className="container">
        <h2 id="mass-times-heading" className="text-center mb-10 text-primary">
          Today's &amp; Upcoming Masses
        </h2>
        <div className="max-w-3xl mx-auto" role="list">
          {upcomingByChurch.map(({ church, next }) => (
            <Link
              key={church.slug}
              to={`/churches/${church.slug}`}
              className="flex items-center justify-between px-5 py-4 border-b border-border no-underline hover:bg-background/60 transition-colors group"
              role="listitem"
            >
              <div className="flex items-center gap-3 min-w-0">
                {isNext(church.slug, next?.mass.day ?? "", next?.mass.time ?? "") && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-sans font-semibold bg-secondary text-secondary-foreground shrink-0">
                    Next
                  </span>
                )}
                <div className="min-w-0">
                  <span className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {church.village}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2 font-sans">
                    ({church.name})
                  </span>
                </div>
              </div>
              {next ? (
                <time
                  dateTime={`${next.mass.day} ${next.mass.time}`}
                  className="font-sans font-medium text-foreground shrink-0 ml-4 text-right"
                >
                  <span className="text-muted-foreground text-sm">{dayNames[next.mass.day]}</span>{" "}
                  {formatTime(next.mass.time)}
                  {next.mass.notes && (
                    <span className="block text-xs text-muted-foreground">{next.mass.notes}</span>
                  )}
                </time>
              ) : (
                <span className="text-muted-foreground text-sm font-sans">See schedule</span>
              )}
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/mass-times"
            className="inline-flex items-center gap-2 font-sans font-medium text-primary hover:text-primary/80"
          >
            View all Mass times →
          </Link>
        </div>
      </div>
    </section>
  );
}
