import { parish } from "@/data/parish";

export default function WelcomeSection() {
  return (
    <section aria-labelledby="welcome-heading" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="welcome-heading" className="mb-4 text-primary">Welcome to Our Parish</h2>
          <p className="font-sans text-foreground/85 leading-relaxed mb-4">
            {parish.welcomeMessage}
          </p>
          <p className="font-sans font-medium text-foreground italic">
            — {parish.welcomeAuthor}
          </p>
        </div>
      </div>
    </section>
  );
}
