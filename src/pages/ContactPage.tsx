import { parish } from "@/data/parish";
import { churches } from "@/data/churches";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Contact Abbeyleix Parish — phone, email, address, and directions. Parish office and parish priest contact details."
        path="/contact"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding">
        <h1 className="text-center text-primary mb-4">Contact Us</h1>
        <p className="text-center font-sans text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're here to help. Whether you have a question about Mass times, sacraments, or anything else, please don't hesitate to get in touch.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-primary mb-4">Parish Office</h2>
              <dl className="space-y-3 font-sans text-sm">
                <div>
                  <dt className="text-muted-foreground">Address</dt>
                  <dd>{parish.address}, {parish.eircode}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Office Phone</dt>
                  <dd><a href={`tel:${parish.officePhone.replace(/\s/g, '')}`}>{parish.officePhone}</a></dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd><a href={`mailto:${parish.email}`}>{parish.email}</a></dd>
                </div>
              </dl>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-primary mb-4">Parish Priest</h2>
              <dl className="space-y-3 font-sans text-sm">
                <div>
                  <dt className="text-muted-foreground">Name</dt>
                  <dd>{parish.parishPriest}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd><a href={`tel:${parish.ppPhone.replace(/\s/g, '')}`}>{parish.ppPhone}</a></dd>
                </div>
              </dl>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-primary mb-4">Who to Contact</h2>
              <ul className="space-y-2 font-sans text-sm text-foreground/80">
                <li><strong>Mass times &amp; general enquiries:</strong> Parish Office</li>
                <li><strong>Funerals (urgent):</strong> Fr Paddy Byrne — {parish.ppPhone}</li>
                <li><strong>Baptism, Communion, Confirmation:</strong> Parish Office</li>
                <li><strong>Marriage:</strong> Parish Office (at least 6 months' notice)</li>
                <li><strong>Sick &amp; housebound visits:</strong> Fr Paddy Byrne</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-primary mb-4">Our Churches</h2>
              <ul className="space-y-3">
                {churches.map((c) => (
                  <li key={c.slug} className="flex justify-between items-start font-sans text-sm">
                    <Link to={`/churches/${c.slug}`} className="text-primary font-medium">
                      {c.fullName}, {c.village}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-primary mb-4">Find Us</h2>
              <div className="rounded-lg overflow-hidden aspect-video bg-muted">
                <iframe
                  title="Abbeyleix Parish location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d-7.346055!3d52.914763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>

            <div className="text-center">
              <a
                href={parish.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans font-medium text-primary"
              >
                Follow us on Facebook →
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
