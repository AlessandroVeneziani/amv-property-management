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
  const currentYear = new Date().getFullYear();
  const socialItems = [
    socialLinks.instagram
      ? { href: socialLinks.instagram, label: "Instagram" }
      : null,
    socialLinks.linkedin
      ? { href: socialLinks.linkedin, label: "LinkedIn" }
      : null
  ].filter(Boolean) as Array<{ href: string; label: string }>;

  return (
    <footer className="footer-smoked-glass mt-10">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-5 pt-12 sm:pb-6 sm:pt-14 lg:pb-6 lg:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1.04fr_0.58fr_0.96fr] lg:items-start lg:gap-14">
            <div className="space-y-9 lg:pr-8">
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
              <div className="max-w-xl text-sm leading-[1.52] text-sand/72 sm:text-base">
                <p className="font-serif text-[1.35rem] leading-tight text-sand/96">
                  {siteConfig.definition}
                </p>
                <div className="mt-5 space-y-6">
                  <p>{siteConfig.guidingStatement}</p>
                  <p>{siteConfig.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-9">
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent/82">
                  Navigazione
                </p>
                <nav className="grid gap-4">
                  {footerNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-sand/72 transition hover:text-sand"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {socialItems.length > 0 ? (
                <div className="space-y-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-accent/82">
                    Social
                  </p>
                  <div className="grid gap-3">
                    {socialItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-sand/72 transition hover:text-sand"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent/82">
                  Legale
                </p>
                <div className="grid gap-3">
                  {footerLegalNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-sand/72 transition hover:text-sand"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-accent/82">
                Informazioni societarie
              </p>
              <div className="flex flex-col gap-8 text-sm leading-[1.32] text-sand/72 sm:text-base">
                <div className="space-y-2.5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent/78">
                    Brand
                  </p>
                  <p className="text-sand/88">{siteConfig.name}</p>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent/78">
                    Denominazione operativa
                  </p>
                  <p className="text-sand/88">{legalInfo.companyName}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-sand/78">Direzione:</p>
                  <div className="space-y-2">
                    <p>{legalInfo.directors[0]}</p>
                    <p>{legalInfo.directors[1]}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent/78">
                    Dati societari
                  </p>
                  <div className="space-y-2">
                    <p>P. IVA {legalInfo.vatNumber}</p>
                    <p>C.F. {legalInfo.taxCode}</p>
                  </div>
                </div>

                <div className="space-y-6 break-words">
                  <p>{legalInfo.address}</p>
                  <div className="space-y-2.5">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block transition hover:text-sand"
                    >
                      Email: {siteConfig.email}
                    </a>
                    <a
                      href={`mailto:${legalInfo.pec}`}
                      className="block transition hover:text-sand"
                    >
                      PEC: {legalInfo.pec}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-sand/66 sm:flex-row sm:items-center sm:justify-between sm:py-6">
            <p>© {currentYear} {siteConfig.name}</p>
            <p>Tutti i diritti riservati</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
