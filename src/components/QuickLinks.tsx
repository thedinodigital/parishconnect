import { Link } from "react-router-dom";
import { Video, Newspaper, Heart, Cross, Phone, BookOpen } from "lucide-react";

const quickLinks = [
  { label: "Webcam", href: "/webcam", icon: Video },
  { label: "Newsletter", href: "/newsletter", icon: Newspaper },
  { label: "Support Us", href: "/donate", icon: Heart },
  { label: "Funerals", href: "/sacraments/funerals", icon: Cross },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "Sacraments", href: "/sacraments", icon: BookOpen },
];

export default function QuickLinks() {
  return (
    <section aria-label="Quick links" className="py-12 bg-primary">
      <div className="container">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex flex-col items-center gap-2 py-4 rounded-lg no-underline text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <link.icon className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm font-sans font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
