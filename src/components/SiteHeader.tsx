import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { parish } from "@/data/parish";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Churches", href: "/churches" },
  { label: "Mass Times", href: "/mass-times" },
  { label: "Notices", href: "/notices" },
  { label: "Sacraments", href: "/sacraments" },
  { label: "Funerals", href: "/funerals" },
  { label: "Fr Paddy", href: "/our-priest" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="no-underline flex items-center gap-3">
            <span className="font-serif text-xl md:text-2xl font-bold text-primary">
              {parish.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded font-sans text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-church-green-light"
                    : "text-foreground/70 hover:text-primary hover:bg-church-green-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="ml-2 px-4 py-2 rounded bg-secondary text-secondary-foreground font-sans text-sm font-semibold no-underline hover:bg-secondary/80 transition-colors"
            >
              Support the Parish
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-3 rounded font-sans text-base font-medium no-underline transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-church-green-light"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-3 rounded bg-secondary text-secondary-foreground font-sans text-base font-semibold no-underline text-center mt-2"
            >
              Support the Parish
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
