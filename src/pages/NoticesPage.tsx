import { notices } from "@/data/notices";
import { churches } from "@/data/churches";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NoticesPage() {
  const sorted = [...notices].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <SEOHead
        title="Notices & News"
        description="Latest notices, news, and announcements from Abbeyleix Parish, serving six churches in south County Laois."
        path="/notices"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding">
        <h1 className="text-center text-primary mb-4">Notices &amp; News</h1>
        <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto">
          The latest updates, events, and announcements from across the parish.
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {sorted.map((notice) => {
            const churchName = notice.church
              ? churches.find((c) => c.slug === notice.church)?.village
              : null;
            return (
              <article key={notice.id} className="border-b border-border pb-8 last:border-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <time dateTime={notice.date} className="text-sm font-sans text-muted-foreground">
                    {new Date(notice.date).toLocaleDateString("en-IE", {
                      day: "numeric", month: "long", year: "numeric",
                    })}
                  </time>
                  {churchName && (
                    <span className="inline-flex px-2 py-0.5 rounded text-xs font-sans font-medium bg-church-green-light text-primary">
                      {churchName}
                    </span>
                  )}
                  {notice.isFuneral && (
                    <span className="inline-flex px-2 py-0.5 rounded text-xs font-sans font-medium bg-muted text-muted-foreground">
                      Funeral
                    </span>
                  )}
                </div>
                <h2 className="text-2xl mb-3 text-foreground">{notice.title}</h2>
                <p className="font-sans text-foreground/80 leading-relaxed">{notice.body}</p>
              </article>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
