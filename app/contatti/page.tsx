import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata, siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Contatti | AMV Asset Direction",
  description:
    "Parliamo del tuo immobile. Diamo una direzione più chiara e più solida al tuo asset.",
  path: "/contatti"
});

export default function ContactPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Contatti"
        title="Parliamo del tuo immobile."
        description="Se vuoi dare una direzione più chiara e più solida al tuo asset, possiamo partire da qui."
      />

      <section className="pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="space-y-5">
            {[
              { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: "PEC", value: siteConfig.pec, href: `mailto:${siteConfig.pec}` },
              { label: "Base operativa", value: siteConfig.location }
            ].map((item) => (
              <div key={item.label} className="panel p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-accent">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-3 block font-serif text-2xl text-sand hover:text-accent">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 font-serif text-2xl text-sand">{item.value}</p>
                )}
              </div>
            ))}

            <div className="panel p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                Incontri
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Riceviamo su appuntamento, con incontri mirati e preparati sul
                contesto reale dell’immobile o dell’operazione.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
