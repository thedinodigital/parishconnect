import { churches } from "@/data/churches";
import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ChurchCards from "@/components/ChurchCards";

export default function ChurchesIndex() {
  return (
    <>
      <SEOHead
        title="Our Churches"
        description="Explore the six churches of Abbeyleix Parish: Abbeyleix, Ballyroan, Ballinakill, Knock, Shanahoe, and Raheen. Each with its own story and heritage."
        path="/churches"
      />
      <SiteHeader />
      <main id="main-content">
        <div className="container pt-12">
          <h1 className="text-center text-primary mb-2">Our Six Churches</h1>
          <p className="text-center font-sans text-muted-foreground mb-0 max-w-2xl mx-auto">
            Six churches, one parish — united in faith across south County Laois since 1824.
          </p>
        </div>
        <ChurchCards />
      </main>
      <SiteFooter />
    </>
  );
}
