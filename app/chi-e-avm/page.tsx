import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/content/site";

export const metadata = createMetadata({
  title: "Chi è AVM | AVM Asset Direction",
  description:
    "Alessandro Veneziani, fondatore di AVM Asset Direction: una struttura introduttiva dedicata allo sguardo e al posizionamento del brand.",
  path: "/chi-e-avm"
});

export default function AboutAvmPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Chi è AVM"
        title="Alessandro Veneziani, fondatore di AVM Asset Direction"
        description="Osservare un immobile significa vedere ciò che può ancora diventare. Questa pagina introduce il profilo AVM e verrà sviluppata in forma editoriale nella fase successiva."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/contatti" className="gold-fill-btn">
            Contatta AVM
          </Link>
          <Link href="/asset-direction" className="gold-outline-btn">
            Asset Direction
          </Link>
        </div>
      </PageHero>

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="panel space-y-5 p-7 sm:p-9">
            <p className="text-sm leading-7 text-muted sm:text-base">
              La struttura attuale prepara la route definitiva dedicata al
              fondatore, al punto di vista AVM e al legame tra sensibilità
              progettuale, lettura immobiliare e concretezza operativa.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base">
              I contenuti completi biografici e di posizionamento verranno
              articolati nella prossima fase, senza alterare l’ossatura globale
              introdotta qui.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
