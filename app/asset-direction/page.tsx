import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/content/site";

export const metadata = createMetadata({
  title: "Asset Direction | AVM Asset Direction",
  description:
    "Asset Direction: direzione strategica dell’immobile. AVM osserva, interpreta e orienta il potenziale dell’asset prima delle scelte progettuali.",
  path: "/asset-direction"
});

export default function AssetDirectionPage() {
  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Asset Direction"
        title="Asset Direction: direzione strategica dell’immobile"
        description="Prima del progetto viene la direzione. AVM osserva, interpreta e orienta il potenziale dell’immobile prima di tradurlo in scelte di spazio, luce, materia e posizionamento."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/contatti" className="gold-fill-btn">
            Vai ai contatti
          </Link>
          <Link href="/progetti" className="gold-outline-btn">
            Vedi i progetti
          </Link>
        </div>
      </PageHero>

      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="panel space-y-5 p-7 sm:p-9">
            <p className="text-sm leading-7 text-muted sm:text-base">
              Questa struttura iniziale introduce il perimetro strategico di AVM
              Asset Direction. La pagina completa verrà sviluppata nella fase
              successiva, mantenendo al centro lettura del contesto, potenziale
              reale e definizione della destinazione dell’immobile.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base">
              In questa fase il sito rende già disponibile la route definitiva,
              la navigazione corretta e i metadata coerenti con il posizionamento
              pubblico del brand.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
