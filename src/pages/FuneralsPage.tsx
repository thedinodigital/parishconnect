import SEOHead from "@/components/SEOHead";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { parish } from "@/data/parish";

export default function FuneralsPage() {
  return (
    <>
      <SEOHead
        title="In Times of Loss — Abbeyleix Parish"
        description="In times of bereavement, Abbeyleix Parish walks with families through the loss of a loved one. Practical guidance on arranging a funeral and finding bereavement support."
        path="/funerals"
      />
      <SiteHeader />
      <main id="main-content" className="container section-padding max-w-3xl mx-auto">
        <h1 className="text-primary mb-6">In Times of Loss</h1>
        <p className="font-sans text-lg text-foreground/85 leading-relaxed mb-6">
          In times of bereavement, we walk with families through the loss of a loved one.
          Please reach out at any hour — we are here to help.
        </p>

        <div className="bg-church-green-light rounded-lg p-6 mb-12">
          <p className="font-sans text-foreground mb-3">
            To arrange a funeral, contact Fr Paddy Byrne directly:
          </p>
          <div className="space-y-2">
            <a
              href={`tel:${parish.ppPhone.replace(/\s/g, "")}`}
              className="block font-sans text-xl font-semibold text-primary no-underline hover:underline"
            >
              📞 {parish.ppPhone}
              <span className="text-sm font-normal text-muted-foreground ml-2">Fr Paddy Byrne</span>
            </a>
            <a
              href={`tel:${parish.officePhone.replace(/\s/g, "")}`}
              className="block font-sans text-xl font-semibold text-primary no-underline hover:underline"
            >
              📞 {parish.officePhone}
              <span className="text-sm font-normal text-muted-foreground ml-2">Parish Office</span>
            </a>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-primary mb-4">What to do when a loved one has died</h2>
            <p className="font-sans text-foreground/85 leading-relaxed">
              The first thing to do is contact Fr Paddy Byrne or the parish office.
              We will guide you through everything that follows. There is no rush —
              take the time you need.
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-4">Arranging the Requiem Mass</h2>
            <p className="font-sans text-foreground/85 leading-relaxed">
              The Requiem Mass is usually held in the church most closely associated
              with the deceased or their family. Fr Paddy will help you choose readings,
              hymns and prayers, and discuss who in the family might wish to take part
              in the liturgy.
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-4">The day of the funeral</h2>
            <p className="font-sans text-foreground/85 leading-relaxed">
              We are committed to making sure each funeral reflects the life of the
              person being remembered. Family members are warmly invited to share in
              the readings, prayers of the faithful, and offertory.
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-4">Burial and cemeteries</h2>
            <p className="font-sans text-foreground/85 leading-relaxed">
              Each of our six churches is associated with a local cemetery or burial
              ground. We will guide you through the practical arrangements, in
              cooperation with your funeral director.
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-4">Bereavement and after the funeral</h2>
            <p className="font-sans text-foreground/85 leading-relaxed">
              Bereavement does not end on the day of the funeral. We remember the
              souls of the faithful departed at the November Masses each year, and at
              the Cemetery Masses held at each church through the summer.
            </p>
            <p className="font-sans text-foreground/85 leading-relaxed mt-4">
              If you are struggling, please reach out — to us, or to one of the
              support services below. You do not have to walk this road alone.
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-4">Helpful resources</h2>
            <ul className="space-y-3 font-sans text-foreground/85">
              <li>
                <strong>The Irish Hospice Foundation</strong> — bereavement support and resources
              </li>
              <li>
                <strong>Anam Cara</strong> — support for bereaved parents
              </li>
              <li>
                <strong>Console (Pieta House)</strong> — bereavement support after suicide
              </li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
