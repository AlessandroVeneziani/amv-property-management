import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata, inquiryLinks } from "@/content/site";

export const metadata = createMetadata({
  title: "Consulenza | AVM Asset Direction",
  description:
    "Richiedi una consulenza AVM Asset Direction per avviare una prima valutazione del potenziale immobiliare.",
  path: "/consulenza"
});

export default function ConsultationPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Consulenza"
        title="Richiedi una consulenza AVM"
        description="Questa route introduce il punto di accesso dedicato alla consulenza. In questa fase mantiene un impianto essenziale, coerente con il sistema attuale di contatto e con il posizionamento del brand."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={inquiryLinks.consultation} className="gold-fill-btn">
            Scrivi ad AVM
          </a>
          <Link href="/contatti" className="gold-outline-btn">
            Vai ai contatti
          </Link>
        </div>
      </PageHero>

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="panel space-y-5 p-7 sm:p-9">
            <p className="text-sm leading-7 text-muted sm:text-base">
              La pagina completa della consulenza verrà sviluppata nella fase
              successiva. Per ora la route è già disponibile, indicizzabile e
              coerente con il sistema globale di navigazione AVM.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
