import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { parish } from "@/data/parish";
import { getRecentBlogPosts } from "@/data/blogPosts";

function RecentReflections() {
  const posts = getRecentBlogPosts(3);
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/blog/${post.slug}`} className="text-foreground no-underline hover:text-primary transition-colors">
            <span className="font-serif font-semibold">{post.title}</span>
            <span className="block text-sm font-sans text-muted-foreground mt-0.5">
              {new Date(post.date).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function OurPriestPage() {
  return (
    <>
      <SEOHead
        title="Fr Paddy Byrne, PP — Abbeyleix Parish"
        description="V. Rev. Paddy Byrne is parish priest for Abbeyleix, Ballinakill and Raheen. Contact details and weekly reflections from Fr Paddy."
        path="/our-priest"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding max-w-3xl mx-auto">
          <h1 className="text-primary text-center">Fr Paddy Byrne, PP</h1>
        </div>

        <div className="space-y-4 mb-12">
          <p className="font-sans text-foreground/85 leading-relaxed">
            V. Rev. Paddy Byrne is parish priest for the communities of Abbeyleix,
            Ballinakill and Raheen, with pastoral care across all six churches in
            the parish family.
          </p>
          <p className="font-sans text-foreground/85 leading-relaxed">
            {parish.priestBio ? parish.priestBio.split(". ").slice(1).join(". ") : "A familiar voice in the diocese through his weekly parish blog, Fr Paddy writes regularly on faith, the lives of the saints, and the everyday rhythms of Irish parish life. He is committed to ensuring that every church in the parish — and every parishioner — feels equally seen and equally served."}
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-primary mb-6">Get in touch</h2>
          <p className="font-sans text-foreground/85 leading-relaxed mb-6">
            Fr Paddy welcomes contact from parishioners and visitors. Whether you
            need to arrange a sacrament, request a Mass intention, or simply have
            a question, please don't hesitate to reach out.
          </p>
          <div className="bg-church-green-light rounded-lg p-6 space-y-3 font-sans">
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${parish.ppPhone.replace(/\s/g, "")}`} className="text-primary">
                {parish.ppPhone}
              </a>
            </p>
            <p>
              <strong>Parish Office:</strong>{" "}
              <a href={`tel:${parish.offices.abbeyleixBallyroan.phone.replace(/\s/g, "")}`} className="text-primary">
                {parish.offices.abbeyleixBallyroan.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${parish.email}`} className="text-primary">
                {parish.email}
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-primary mb-6">Latest Reflections</h2>
          <RecentReflections />
          <Link
            to="/blog"
            className="inline-block mt-6 font-sans font-medium text-primary no-underline hover:text-primary/80"
          >
            Read all reflections →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
