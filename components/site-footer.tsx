import Link from "next/link";

import { legalInfo, navigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_0.65fr_1.05fr]">
        <div className="space-y-4">
          <p className="eyebrow">AMV Property Management</p>
          <p className="max-w-md font-serif text-2xl leading-snug text-sand">
            Gestione, estetica e valorizzazione per immobili che devono lasciare
            una traccia precisa.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Navigazione</p>
          <div className="grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-sand"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Informazioni legali
          </p>
          <div className="grid gap-2 text-sm leading-6 text-muted">
            <p className="text-sand/88">{legalInfo.companyName}</p>
            <p>{legalInfo.owner}</p>
            <p>P. IVA {legalInfo.vatNumber}</p>
            <p>C.F. {legalInfo.taxCode}</p>
            <p>{legalInfo.address}</p>
            <a href={`mailto:${legalInfo.pec}`} className="transition hover:text-sand">
              PEC: {legalInfo.pec}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-sand">
              Email: {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-line px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AMV Property Management. Tutti i diritti riservati.</p>
        <p>{siteConfig.location}</p>
      </div>
    </footer>
  );
}
