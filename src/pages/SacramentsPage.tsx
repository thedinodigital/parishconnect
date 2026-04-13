import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const sacraments = [
  {
    name: "Baptism",
    intro: "Welcoming a new child into the parish family is one of the great joys of our work.",
    href: "/sacraments/baptism",
  },
  {
    name: "First Holy Communion",
    intro: "An incredibly special day, not just in the life of a young person, but for their entire family and school community.",
    href: "/sacraments/communion",
  },
  {
    name: "Confirmation",
    intro: "A moment of stepping forward in faith, taking one's place in the wider community of the Church.",
    href: "/sacraments/confirmation",
  },
  {
    name: "Reconciliation",
    intro: "The sacrament of God's mercy. Available before all weekend Masses, or by arrangement at any time.",
    href: "/sacraments/reconciliation",
  },
  {
    name: "Marriage",
    intro: "A sacrament rooted in faith, hope and love. We are here to walk with couples preparing for marriage in our churches.",
    href: "/sacraments/marriage",
  },
  {
    name: "Sacrament of the Sick",
    intro: "Health of body and peace of mind are gifts we never take for granted. We are always available to bring the sacraments to those who are sick or housebound.",
    href: "/sacraments/sick",
  },
  {
    name: "Funerals & Bereavement",
    intro: "In times of bereavement, we walk with families through the loss of a loved one.",
    href: "/funerals",
  },
];

export default function SacramentsPage() {
  return (
    <>
      <SEOHead
        title="The Sacraments at Abbeyleix Parish"
        description="Information about Baptism, Communion, Confirmation, Marriage, Reconciliation, Sacrament of the Sick, and Funerals at Abbeyleix Parish."
        path="/sacraments"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding max-w-3xl mx-auto">
        <h1 className="text-primary mb-6">The Sacraments at Abbeyleix Parish</h1>
        <p className="font-sans text-lg text-foreground/85 leading-relaxed mb-12 italic">
          The sacraments are the moments where the life of the Church meets the life of the family — birth and welcome, growing in faith, love and commitment, healing and farewell. We are here to walk with you at every one of these moments. Please reach out to Fr Paddy or the parish office for any questions, or to begin arrangements.
        </p>

        <div className="space-y-6">
          {sacraments.map((s) => (
            <Link
              key={s.name}
              to={s.href}
              className="block border border-border rounded-lg p-6 bg-card no-underline hover:shadow-md transition-shadow group"
            >
              <h2 className="text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                {s.name}
              </h2>
              <p className="font-sans text-foreground/80 italic mb-3">{s.intro}</p>
              <span className="text-sm font-sans font-medium text-primary">
                Find out more →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
