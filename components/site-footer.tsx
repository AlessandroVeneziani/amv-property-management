import Link from "next/link";

import { legalInfo, navigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center sm:py-16">
          <p className="text-base font-light tracking-[0.04em] text-sand/68 sm:text-lg">
            Una direzione chiara crea valore misurabile.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.6fr_1.1fr] lg:gap-16 lg:py-16">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl leading-tight text-sand">
              AMV Property Management
            </h2>
            <div className="max-w-md space-y-5 text-sm leading-7 text-muted sm:text-base">
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

          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Navigazione</p>
            <nav className="grid gap-3">
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

          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Informazioni societarie
            </p>
            <div className="grid gap-1 text-sm leading-7 text-muted sm:text-base">
              <p className="text-sand/88">{legalInfo.companyName}</p>
              <p>{legalInfo.owner}</p>
              <p className="pt-3">In collaborazione con {legalInfo.collaborator}</p>
              <p className="pt-3">P. IVA {legalInfo.vatNumber}</p>
              <p>C.F. {legalInfo.taxCode}</p>
              <p className="pt-3">{legalInfo.address}</p>
              <a href={`mailto:${siteConfig.email}`} className="pt-3 transition hover:text-sand">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AMV Property Management</p>
          <p>Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}
