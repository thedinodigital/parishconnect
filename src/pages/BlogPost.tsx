import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getBlogPostBySlug } from "@/data/blogPosts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) navigate("/blog", { replace: true });
  }, [post, navigate]);

  if (!post) return null;

  const shareUrl = `https://abbeyleixparish.ie/blog/${post.slug}`;
  const shareText = `${post.title} — a reflection from Fr Paddy Byrne`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const formattedDate = new Date(post.date).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding max-w-prose mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Reflections</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article>
          <h1 className="text-primary mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm font-sans text-muted-foreground mb-10">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readingTimeMinutes} minute read</span>
            <span>·</span>
            <span>by {post.author}</span>
          </div>

          <div className="prose prose-lg max-w-none font-serif leading-[1.75] text-foreground/90
            prose-headings:font-serif prose-headings:text-primary
            prose-blockquote:border-l-secondary prose-blockquote:border-l-4 prose-blockquote:pl-6
            prose-blockquote:italic prose-blockquote:text-foreground/75 prose-blockquote:not-italic
            prose-blockquote:font-serif
            prose-p:mb-5
            prose-em:text-foreground/80">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>

          <p className="text-sm font-sans text-muted-foreground italic mt-10 border-t border-border pt-6">
            This reflection was originally published in {new Date(post.date).toLocaleDateString("en-IE", { month: "long", year: "numeric" })} and
            is republished here with Fr Paddy's weekly blog. Fr Paddy publishes a new reflection every week.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-border">
            <span className="text-sm font-sans text-muted-foreground font-medium">Share:</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#25D366] text-white font-sans text-sm font-medium no-underline hover:bg-[#20bd5a] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#1877F2] text-white font-sans text-sm font-medium no-underline hover:bg-[#1565c0] transition-colors"
            >
              Facebook
            </a>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border bg-background font-sans text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Copy link
            </button>
          </div>

          <div className="mt-10">
            <Link
              to="/blog"
              className="font-sans font-medium text-primary no-underline hover:text-primary/80"
            >
              ← Back to all reflections
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
