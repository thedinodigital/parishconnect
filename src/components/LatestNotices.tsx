import { Link } from "react-router-dom";
import { getRecentNotices } from "@/data/notices";

export default function LatestNotices() {
  const recent = getRecentNotices(3);

  return (
    <section aria-labelledby="notices-heading" className="section-padding bg-card">
      <div className="container">
        <h2 id="notices-heading" className="text-center mb-2 text-primary">Parish News</h2>
        <p className="text-center text-muted-foreground font-sans mb-10 max-w-lg mx-auto italic">
          News and notices from across the parish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recent.map((notice) => (
            <article key={notice.id} className="border border-border rounded-lg p-6 bg-background">
              <time dateTime={notice.date} className="text-sm font-sans text-muted-foreground">
                {new Date(notice.date).toLocaleDateString("en-IE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h3 className="text-lg mt-2 mb-3 text-foreground">{notice.title}</h3>
              <p className="text-sm font-sans text-foreground/80 leading-relaxed">{notice.excerpt}</p>
              <Link to="/notices" className="inline-block mt-4 text-sm font-sans font-medium text-primary">
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/notices" className="font-sans font-medium text-primary hover:text-primary/80">
            View all notices →
          </Link>
        </div>
      </div>
    </section>
  );
}
