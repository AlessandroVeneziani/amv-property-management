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
    <header className="sticky top-0 z-50 px-4 pt-2.5 sm:px-6 sm:pt-3">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition duration-300 ${
          scrolled
            ? "border-white/10 bg-black/60 shadow-glow backdrop-blur-xl"
            : "border-transparent bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:gap-6 lg:px-7">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center text-sand lg:flex-none"
          >
            <span className="flex h-[84px] items-center overflow-hidden sm:h-[90px] md:h-[96px] lg:h-[144px] xl:h-[156px]">
              <Image
                src={brandAssets.wordmark}
                alt={siteConfig.name}
                width={707}
                height={353}
                className="h-full w-auto max-w-none shrink-0 -ml-[1.25rem] sm:-ml-[1.4rem] md:-ml-[1.5rem] lg:-ml-[1.7rem] xl:-ml-[1.8rem]"
                priority
              />
            </span>
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
