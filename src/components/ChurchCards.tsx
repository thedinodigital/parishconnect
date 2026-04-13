import { Link } from "react-router-dom";
import { churches } from "@/data/churches";
import churchPlaceholder from "@/assets/church-placeholder.jpg";

export default function ChurchCards() {
  return (
    <section aria-labelledby="churches-heading" className="section-padding">
      <div className="container">
        <h2 id="churches-heading" className="text-center mb-4 text-primary">Our Six Churches</h2>
        <p className="text-center text-muted-foreground font-sans mb-12 max-w-2xl mx-auto">
          Six churches, one parish — each with its own story, heritage, and community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church) => (
            <Link
              key={church.slug}
              to={`/churches/${church.slug}`}
              className="group block rounded-lg border border-border bg-card overflow-hidden no-underline hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={church.heroImage || churchPlaceholder}
                  alt={`${church.fullName}, ${church.village}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl mb-1 text-foreground group-hover:text-primary transition-colors">
                  {church.fullName}
                </h3>
                <p className="text-sm font-sans text-muted-foreground mb-2">{church.village}</p>
                <p className="text-sm font-sans text-foreground/80 mb-3">
                  {church.shortDescription}
                </p>
                <span className="text-sm font-sans font-medium text-primary">
                  Visit church page →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
