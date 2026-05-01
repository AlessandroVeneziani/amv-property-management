"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { brandAssets, inquiryLinks, navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition duration-300 ${
          scrolled
            ? "border-white/10 bg-black/60 shadow-glow backdrop-blur-xl"
            : "border-transparent bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:gap-6 lg:px-7">
          <Link
            href="/"
            className="flex min-w-0 max-w-[15.75rem] flex-1 items-center text-sand sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[24rem] lg:flex-none xl:max-w-[26rem]"
          >
            <div className="min-w-0">
              <Image
                src={brandAssets.wordmark}
                alt={siteConfig.name}
                width={640}
                height={148}
                className="h-[42px] w-auto sm:h-[46px] lg:h-[58px] xl:h-[62px]"
                priority
              />
              <p className="mt-1.5 text-[0.52rem] font-semibold uppercase leading-[1.35] tracking-[0.22em] text-[#C6A75E]/95 sm:text-[0.56rem] sm:tracking-[0.24em] lg:mt-2 lg:text-[0.66rem] lg:tracking-[0.28em] xl:text-[0.72rem]">
                Gestione e valorizzazione
                <span className="block sm:inline"> immobiliare</span>
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-[0.16em] transition ${
                    active ? "text-sand" : "text-muted hover:text-sand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a href={inquiryLinks.consultation} className="gold-outline-btn">
              Richiedi una prima analisi
            </a>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-2.5 text-sm uppercase tracking-[0.2em] text-sand lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label="Apri menu"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-px w-6 bg-sand transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-sand transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-6 bg-sand transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-[24rem] border-t border-white/10" : "max-h-0"
          }`}
        >
          <nav className="grid gap-2 px-5 py-4">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-3 py-3 text-sm uppercase tracking-[0.18em] transition ${
                    active
                      ? "bg-white/[0.06] text-sand"
                      : "text-muted hover:bg-white/[0.05] hover:text-sand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={inquiryLinks.consultation}
              className="gold-fill-btn mt-2 justify-center"
            >
              Richiedi una prima analisi
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
