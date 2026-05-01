import Link from "next/link";

import { legalInfo, navigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.08fr_0.58fr_1fr] lg:gap-18 lg:py-18">
          <div className="space-y-7 lg:pr-8">
            <h2 className="font-serif text-[1.75rem] leading-tight tracking-[0.01em] text-sand">
              AVM Property Management
            </h2>
            <div className="max-w-lg space-y-5 text-sm leading-[1.95] text-muted sm:text-base">
              <p>
                Direzione e valorizzazione immobiliare.
                <br />
                Asset gestiti con metodo, estetica e posizionamento.
              </p>
              <p>
                Ogni immobile non è solo uno spazio.
                <br />
                È un valore da costruire e consolidare nel tempo.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Navigazione</p>
            <nav className="grid gap-3.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition hover:text-sand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Informazioni societarie
            </p>
            <div className="grid gap-1.5 text-sm leading-7 text-muted sm:text-base">
              <p className="text-sand/88">{legalInfo.companyName}</p>
              <p className="pt-2.5 text-sand/76">Direzione:</p>
              <p>{legalInfo.directors[0]}</p>
              <p>{legalInfo.directors[1]}</p>
              <p className="pt-2.5">P. IVA {legalInfo.vatNumber}</p>
              <p>C.F. {legalInfo.taxCode}</p>
              <p className="pt-2.5">{legalInfo.address}</p>
              <a href={`mailto:${siteConfig.email}`} className="pt-2.5 transition hover:text-sand">
                Email: {siteConfig.email}
              </a>
              <a href={`mailto:${legalInfo.pec}`} className="transition hover:text-sand">
                PEC: {legalInfo.pec}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2.5 px-6 py-6 text-sm text-muted/90 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AVM Property Management</p>
          <p>Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}
