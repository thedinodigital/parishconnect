import { useParams, Link } from "react-router-dom";
import { getChurchBySlug, formatTime } from "@/data/churches";
import { getNoticesByChurch } from "@/data/notices";
import { parish } from "@/data/parish";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import churchPlaceholder from "@/assets/church-placeholder.jpg";

const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const dayNames: Record<string, string> = {
  Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
  Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
};

export default function ChurchPage() {
  const { slug } = useParams<{ slug: string }>();
  const church = slug ? getChurchBySlug(slug) : undefined;

  if (!church) {
    return (
      <>
        <SiteHeader />
        <main id="main-content" className="container section-padding text-center">
          <h1>Church not found</h1>
          <p className="font-sans mt-4">
            <Link to="/">Return to homepage</Link>
          </p>
        </main>
        <SiteFooter />
      </>
    );
  }

  const notices = getNoticesByChurch(church.slug);
  const sortedMasses = [...church.massTimes].sort(
    (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
  );
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${church.coordinates.lat},${church.coordinates.lng}`;

  return (
    <>
      <SEOHead
        title={`${church.fullName}, ${church.village}`}
        description={`${church.shortDescription} Mass times, history, and heritage of ${church.fullName} in ${church.village}, Co. Laois.`}
        path={`/churches/${church.slug}`}
      />
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-end">
          <img
            src={church.heroImage || churchPlaceholder}
            alt={`${church.fullName}, ${church.village}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          <div className="relative z-10 container pb-10 pt-20">
            <p className="font-sans text-sm text-primary-foreground/80 mb-2">
              <Link to="/" className="text-primary-foreground/80 no-underline hover:underline">Home</Link>
              {" / "}
              <Link to="/churches" className="text-primary-foreground/80 no-underline hover:underline">Churches</Link>
              {" / "}
              {church.village}
            </p>
            <h1 className="text-primary-foreground drop-shadow-lg">{church.fullName}</h1>
            <p className="font-serif text-xl text-primary-foreground/90 mt-2">{church.village} · {church.dedication}</p>
          </div>
        </section>

        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Mass Times */}
              <section aria-labelledby="church-mass-times">
                <h2 id="church-mass-times" className="text-primary mb-6">Mass Times</h2>
                <div className="bg-church-green-light rounded-lg p-6">
                  {sortedMasses.map((m, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="font-sans font-medium">{dayNames[m.day]}</span>
                      <div className="text-right">
                        <time dateTime={`${m.day} ${m.time}`} className="font-sans font-semibold">
                          {formatTime(m.time)}
                        </time>
                        {m.notes && (
                          <span className="block text-sm text-muted-foreground">{m.notes}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* History */}
              <section aria-labelledby="church-history">
                <h2 id="church-history" className="text-primary mb-6">About This Church</h2>
                <div className="prose prose-lg max-w-none">
                  {church.history.map((p, i) => (
                    <p key={i} className="font-sans text-foreground/85 leading-relaxed mb-4">{p}</p>
                  ))}
                </div>
              </section>

              {/* Heritage highlights */}
              {church.heritageHighlights.length > 0 && (
                <section aria-labelledby="church-heritage">
                  <h2 id="church-heritage" className="text-primary mb-6">Heritage Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {church.heritageHighlights.map((h, i) => (
                      <div key={i} className="border border-border rounded-lg p-5 bg-card">
                        <h3 className="text-lg mb-2 text-foreground">{h.title}</h3>
                        <p className="text-sm font-sans text-foreground/80">{h.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Find Us */}
              <section aria-labelledby="church-find">
                <h2 id="church-find" className="text-primary mb-6">Visit Us</h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="font-sans mb-3">{church.address}</p>
                  {church.eircode && <p className="font-sans text-sm text-muted-foreground mb-3">Eircode: {church.eircode}</p>}
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-sans font-medium text-primary"
                  >
                    Open in Google Maps →
                  </a>
                  <div className="mt-4 rounded-lg overflow-hidden aspect-video bg-muted">
                    <iframe
                      title={`Map of ${church.fullName}`}
                      src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2000!2d${church.coordinates.lng}!3d${church.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </section>

              {/* Notices */}
              {notices.length > 0 && (
                <section aria-labelledby="church-notices">
                  <h2 id="church-notices" className="text-primary mb-6">From the Parish</h2>
                  {notices.map((n) => (
                    <article key={n.id} className="border-b border-border py-4 last:border-0">
                      <time dateTime={n.date} className="text-sm font-sans text-muted-foreground">
                        {new Date(n.date).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                      <h3 className="text-lg mt-1 mb-2">{n.title}</h3>
                      <p className="font-sans text-sm text-foreground/80">{n.excerpt}</p>
                    </article>
                  ))}
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg text-primary mb-4">About This Church</h3>
                  <dl className="space-y-3 font-sans text-sm">
                    <div>
                      <dt className="text-muted-foreground">Address</dt>
                      <dd>
                        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary">
                          {church.address}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd><a href={`tel:${church.phone.replace(/\s/g, '')}`}>{church.phone}</a></dd>
                    </div>
                    {(church.slug === "raheen" || church.slug === "shanahoe") && (
                      <div>
                        <dt className="text-muted-foreground">Parish Office</dt>
                        <dd><a href="tel:0578730844">057 873 0844</a></dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-muted-foreground">Built</dt>
                      <dd>{church.builtYear}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Style</dt>
                      <dd>{church.architecturalStyle}</dd>
                    </div>
                    {church.architect && (
                      <div>
                        <dt className="text-muted-foreground">Architect</dt>
                        <dd>{church.architect}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-muted-foreground">Patron</dt>
                      <dd>{church.patron}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Parish Priest</dt>
                      <dd>{parish.parishPriest}</dd>
                    </div>
                    {church.hasWebcam && (
                      <div>
                        <dt className="text-muted-foreground">Webcam</dt>
                        <dd><Link to="/webcam" className="text-primary">Watch live</Link></dd>
                      </div>
                    )}
                    {church.hasCemetery && (
                      <div>
                        <dt className="text-muted-foreground">Cemetery</dt>
                        <dd>Yes — adjoining</dd>
                      </div>
                    )}
                  </dl>
                  <Link
                    to="/donate"
                    className="block mt-6 text-center px-4 py-3 rounded bg-secondary text-secondary-foreground font-sans font-semibold no-underline hover:bg-secondary/80 transition-colors"
                  >
                    Support the Parish
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
