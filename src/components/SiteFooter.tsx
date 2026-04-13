import { Link } from "react-router-dom";
import { churches } from "@/data/churches";
import { parish } from "@/data/parish";

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-secondary font-serif">Contact</h4>
            <address className="font-sans text-sm not-italic leading-relaxed text-primary-foreground/80">
              <p className="mb-1">{parish.parishPriest}</p>
              <p className="mb-1">{parish.address}</p>
              <p className="mb-1">Parish Office: {parish.officePhone}</p>
              <p className="mb-1">PP: {parish.ppPhone}</p>
              <p>
                <a href={`mailto:${parish.email}`} className="text-secondary no-underline hover:underline">
                  {parish.email}
                </a>
              </p>
            </address>
          </div>

          {/* Our Churches */}
          <div>
            <h4 className="text-lg mb-4 text-secondary font-serif">Our Churches</h4>
            <nav aria-label="Churches">
              <ul className="space-y-2 font-sans text-sm">
                {churches.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/churches/${c.slug}`}
                      className="text-primary-foreground/80 no-underline hover:text-secondary transition-colors"
                    >
                      {c.fullName}, {c.village}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-secondary font-serif">Information</h4>
            <nav aria-label="Footer links">
              <ul className="space-y-2 font-sans text-sm">
                {[
                  { label: "Mass Times", href: "/mass-times" },
                  { label: "Notices & News", href: "/notices" },
                  { label: "Sacraments", href: "/sacraments" },
                  { label: "Webcam", href: "/webcam" },
                  { label: "Newsletter", href: "/newsletter" },
                  { label: "Donate", href: "/donate" },
                  { label: "Heritage", href: "/heritage" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 no-underline hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Diocese & Safeguarding */}
          <div>
            <h4 className="text-lg mb-4 text-secondary font-serif">Diocese & Safeguarding</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href={parish.dioceseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 no-underline hover:text-secondary transition-colors"
                >
                  Kildare & Leighlin Diocese
                </a>
              </li>
              <li>
                <Link
                  to="/safeguarding"
                  className="text-primary-foreground/80 no-underline hover:text-secondary transition-colors"
                >
                  Safeguarding
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/80 no-underline hover:text-secondary transition-colors"
                >
                  Privacy & Data Protection
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={parish.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 no-underline hover:text-secondary transition-colors text-sm font-sans"
              >
                Facebook →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center font-sans text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {parish.name}, Diocese of {parish.diocese}. All rights reserved.</p>
          <p className="mt-1">
            Website by{" "}
            <a
              href="https://dinodigital.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary no-underline hover:underline"
            >
              Dino Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
