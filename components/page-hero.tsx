import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children
}: PageHeroProps) {
  return (
    <section className="section-space pb-14 pt-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-sand sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
        <div className="space-y-4 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
