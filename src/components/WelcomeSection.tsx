import { parish } from "@/data/parish";
import priestPhoto from "@/assets/fr-paddy.png";

export default function WelcomeSection() {
  return (
    <section aria-labelledby="welcome-heading" className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shrink-0 border-4 border-secondary">
            <img
              src={priestPlaceholder}
              alt="Fr Paddy Byrne, Parish Priest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 id="welcome-heading" className="mb-4 text-primary">Welcome to Our Parish</h2>
            <p className="font-sans text-foreground/85 leading-relaxed mb-4">
              {parish.welcomeMessage}
            </p>
            <p className="font-sans font-medium text-foreground italic">
              — {parish.welcomeAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
