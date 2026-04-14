import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getAllBlogPosts } from "@/data/blogPosts";

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <>
      <SEOHead
        title="Weekly Reflections"
        description="Weekly reflections from Fr Paddy Byrne, parish priest of Abbeyleix, Ballinakill and Raheen. Faith, the saints, and the everyday rhythms of Irish parish life."
        path="/blog"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding max-w-3xl mx-auto">
        <h1 className="text-primary text-center">Weekly Reflections</h1>
        <p className="text-center font-serif text-lg text-foreground/70 mb-2">
          From Fr Paddy Byrne, PP
        </p>
        <p className="text-center text-muted-foreground font-sans italic max-w-xl mx-auto mb-12">
          Every week, Fr Paddy writes a reflection on faith, the saints, the changing seasons, and
          the life of the parish. These reflections are a small window into our parish family —
          please read, share, and return often.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm font-sans text-muted-foreground mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTimeMinutes} minute read</span>
              </div>
              <h2 className="text-xl mb-3">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-foreground no-underline hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm font-sans text-foreground/80 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm font-sans font-medium text-primary no-underline hover:text-primary/80"
              >
                Read reflection →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
