import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/content/site";

export const metadata = createMetadata({
  title: "Privacy Policy | AVM Asset Direction",
  description:
    "Informativa privacy del sito AVM Asset Direction. Documento legale in fase di aggiornamento.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="Documento legale in fase di aggiornamento."
      />

      <section className="pb-10">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="panel space-y-5 p-7 sm:p-9">
            <p className="text-sm leading-7 text-muted sm:text-base">
              Documento legale in fase di aggiornamento.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base">
              Per informazioni immediate sui contatti e sul trattamento dei dati
              relativi alle richieste inviate tramite email, puoi fare
              riferimento alla pagina contatti.
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
