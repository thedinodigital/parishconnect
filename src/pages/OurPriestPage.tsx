import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { parish } from "@/data/parish";
import priestPlaceholder from "@/assets/priest-placeholder.jpg";

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
        <div className="flex flex-col items-center mb-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary mb-6">
            <img
              src={priestPlaceholder}
              alt="Fr Paddy Byrne, Parish Priest"
              className="w-full h-full object-cover"
            />
          </div>
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
          <h2 className="text-primary mb-6">From the Blog</h2>
          <p className="font-sans text-muted-foreground italic">
            Fr Paddy's weekly blog reflections will appear here soon.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
