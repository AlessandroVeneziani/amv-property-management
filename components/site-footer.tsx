import Image from "next/image";
import Link from "next/link";

import {
  brandAssets,
  footerLegalNavigation,
  footerNavigation,
  legalInfo,
  siteConfig,
  socialLinks
} from "@/content/site";

export function SiteFooter() {
  const socialItems = [
    socialLinks.instagram
      ? { href: socialLinks.instagram, label: "Instagram" }
      : null,
    socialLinks.linkedin
      ? { href: socialLinks.linkedin, label: "LinkedIn" }
      : null
  ].filter(Boolean) as Array<{ href: string; label: string }>;

  return (
    <footer>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.08fr_0.58fr_1fr] lg:gap-18 lg:py-18">
          <div className="space-y-7 lg:pr-8">
            <Link href="/" className="inline-flex">
              <span className="relative block h-14 w-[17rem] sm:h-16 sm:w-[19rem]">
                <Image
                  src={brandAssets.wordmark}
                  alt={siteConfig.name}
                  fill
                  sizes="304px"
                  className="object-contain object-left"
                />
              </span>
            </Link>
            <div className="max-w-lg space-y-4 text-sm leading-[1.9] text-muted sm:text-base">
              <p className="font-serif text-xl leading-tight text-sand">
                {siteConfig.definition}
              </p>
              <p>{siteConfig.guidingStatement}</p>
              <p>{siteConfig.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Navigazione</p>
            <nav className="grid gap-3.5">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition hover:text-sand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {socialItems.length > 0 ? (
              <div className="space-y-3 pt-3">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Social</p>
                <div className="grid gap-3">
                  {socialItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted transition hover:text-sand"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="space-y-3 pt-3">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Legale</p>
              <div className="grid gap-3">
                {footerLegalNavigation.map((item) => (
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
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              Informazioni societarie
            </p>
            <div className="grid gap-1.5 text-sm leading-7 text-muted sm:text-base">
              <div className="space-y-1 pb-3">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent/85">
                  Denominazione operativa
                </p>
                <p className="text-sand/78">{legalInfo.companyName}</p>
              </div>
              <p className="pt-1 text-sand/76">Direzione:</p>
              <p>{legalInfo.directors[0]}</p>
              <p>{legalInfo.directors[1]}</p>
              <p className="pt-2.5 text-[11px] uppercase tracking-[0.24em] text-accent/85">
                Dati societari
              </p>
              <p>P. IVA {legalInfo.vatNumber}</p>
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
          <p>© 2026 {siteConfig.name}</p>
          <p>Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}
