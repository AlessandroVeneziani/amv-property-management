import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-[34px] border border-line bg-white/[0.03] p-8 text-center sm:p-12">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 font-serif text-4xl text-sand sm:text-5xl">
            Il contenuto richiesto non è disponibile.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Torniamo a una lettura più chiara del sito. Da qui puoi ripartire dalla
            home o rientrare nel portfolio attivo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="gold-fill-btn">
              Torna alla home
            </Link>
            <Link href="/progetti" className="gold-outline-btn">
              Vai ai progetti
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
