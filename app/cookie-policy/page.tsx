import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/content/site";

export const metadata = createMetadata({
  title: "Cookie Policy | AVM Asset Direction",
  description:
    "Informativa cookie del sito AVM Asset Direction. Documento legale in fase di aggiornamento.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Cookie Policy"
        title="Cookie Policy"
        description="Documento legale in fase di aggiornamento."
      />

      <section className="pb-10">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="panel space-y-5 p-7 sm:p-9">
            <p className="text-sm leading-7 text-muted sm:text-base">
              Documento legale in fase di aggiornamento.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base">
              La struttura della pagina è stata predisposta per la futura
              integrazione del testo definitivo senza alterare routing, footer e
              sitemap già aggiornati in questa fase.
            </p>
            <div>
              <Link href="/contatti" className="gold-outline-btn">
                Vai ai contatti
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
