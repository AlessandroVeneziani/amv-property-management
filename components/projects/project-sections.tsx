import Link from "next/link";

import type {
  ProjectPageBeforeAfterSection,
  ProjectPageCta,
  ProjectPageEditorialSection,
  ProjectPageFocusSection,
  ProjectPageFullWidthSection,
  ProjectPageGallerySection,
  ProjectPageRenderSequenceSection,
  ProjectPageOutcomeSection
} from "@/content/projects";
import { SectionHeading } from "@/components/section-heading";

import { ProjectResponsiveImage } from "./project-responsive-image";

export function ProjectEditorialSection({
  eyebrow,
  title,
  paragraphs,
  image,
  imageSide = "right",
  surface = "transparent"
}: ProjectPageEditorialSection) {
  const textPanelClass =
    surface === "light"
      ? "editorial-light-surface px-6 py-7 sm:px-8 sm:py-9"
      : "space-y-5";

  return (
    <div
      className={`grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-center ${
        imageSide === "left" ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
      }`}
    >
      <div className={textPanelClass}>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted sm:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <figure className="relative aspect-[16/11] min-h-[22rem] overflow-hidden rounded-[32px] border border-line shadow-glow sm:min-h-[26rem]">
        <ProjectResponsiveImage
          image={image}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover"
        />
      </figure>
    </div>
  );
}

export function ProjectFullWidthMedia({
  eyebrow,
  title,
  paragraphs,
  image
}: ProjectPageFullWidthSection) {
  return (
    <div className="space-y-5">
      {eyebrow || title || paragraphs?.length ? (
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? (
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          ) : null}
          {paragraphs?.length ? (
            <div className="space-y-4 text-base leading-7 text-muted sm:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <figure className="relative aspect-[16/10] min-h-[26rem] overflow-hidden rounded-[34px] border border-line shadow-glow sm:min-h-[34rem]">
        <ProjectResponsiveImage
          image={image}
          sizes="(min-width: 1024px) 82vw, 100vw"
          className="object-cover"
        />
      </figure>
    </div>
  );
}

export function ProjectFocusBlock({
  eyebrow,
  title,
  items
}: ProjectPageFocusSection) {
  return (
    <div className="space-y-6">
      {eyebrow || title ? (
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? (
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl">
              {title}
            </h2>
          ) : null}
        </div>
      ) : null}

      <div className="grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="space-y-4 px-0 py-6 md:px-6 md:first:pl-0 md:last:pr-0">
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent/92">
              {item.label}
            </p>
            <p className="max-w-sm text-base leading-7 text-muted sm:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectGallery({
  eyebrow,
  title,
  description,
  images
}: ProjectPageGallerySection) {
  return (
    <div className="space-y-6">
      {eyebrow || title || description ? (
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? (
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-12">
        {images.map((image, index) => {
          const baseClass =
            images.length === 1
              ? "lg:col-span-12 aspect-[16/10] min-h-[28rem]"
              : images.length === 2
                ? "lg:col-span-6 aspect-[6/5] min-h-[24rem]"
                : index === 0
                  ? "lg:col-span-7 aspect-[16/10] min-h-[28rem]"
                  : "lg:col-span-5 aspect-[4/5] min-h-[24rem]";

          return (
            <figure
              key={`${image.src}-${index}`}
              className={`relative overflow-hidden rounded-[32px] border border-line shadow-glow ${baseClass}`}
            >
              <ProjectResponsiveImage
                image={image}
                sizes={
                  images.length === 1
                    ? "(min-width: 1024px) 82vw, 100vw"
                    : images.length === 2
                      ? "(min-width: 1024px) 40vw, 100vw"
                      : index === 0
                        ? "(min-width: 1024px) 54vw, 100vw"
                        : "(min-width: 1024px) 28vw, 100vw"
                }
                className="object-cover"
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectRenderSequence({
  eyebrow,
  title,
  description,
  items
}: ProjectPageRenderSequenceSection) {
  return (
    <div className="space-y-8 sm:space-y-10">
      {eyebrow || title || description ? (
        <div className="max-w-3xl space-y-4">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? (
            <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
          ) : null}
        </div>
      ) : null}

      <div className="space-y-8 sm:space-y-10 lg:space-y-14">
        {items.map((item, index) => {
          const isPortrait = item.height > item.width;

          return (
            <figure key={item.id} className="space-y-4">
              <div className="flex items-baseline gap-4 border-t border-line/80 pt-4 sm:pt-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent/78">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-sand sm:text-[2rem]">
                  {item.title}
                </h3>
              </div>

              <div
                className={`relative overflow-hidden rounded-[32px] border border-line shadow-glow ${
                  isPortrait ? "min-h-[28rem] sm:min-h-[34rem]" : "min-h-[22rem] sm:min-h-[28rem]"
                }`}
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <ProjectResponsiveImage
                  image={item.image}
                  sizes="(min-width: 1024px) 82vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectBeforeAfter({
  eyebrow,
  title,
  description,
  beforeLabel,
  afterLabel,
  before,
  after
}: ProjectPageBeforeAfterSection) {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl space-y-4">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="font-serif text-3xl leading-tight text-sand sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {[
          { label: beforeLabel, image: before },
          { label: afterLabel, image: after }
        ].map((item) => (
          <figure key={item.label} className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent/92">
              {item.label}
            </p>
            <div className="relative aspect-[6/5] min-h-[24rem] overflow-hidden rounded-[32px] border border-line shadow-glow">
              <ProjectResponsiveImage
                image={item.image}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function ProjectOutcomeSection({
  eyebrow,
  title,
  paragraphs,
  image,
  mode = "result"
}: ProjectPageOutcomeSection) {
  const tone = mode === "expected" ? "Direzione attesa" : "Risultato";

  return (
    <div className="editorial-light-panel px-6 py-8 text-ink sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className={`grid gap-8 ${image ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
        <div className="space-y-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8f7430]">
            {eyebrow ?? tone}
          </p>
          <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="max-w-2xl space-y-4 text-base leading-7 text-ink/78 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {image ? (
          <figure className="relative aspect-[16/11] min-h-[22rem] overflow-hidden rounded-[28px] border border-black/10 shadow-[0_24px_60px_rgba(31,24,17,0.14)]">
            <ProjectResponsiveImage
              image={image}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </figure>
        ) : null}
      </div>
    </div>
  );
}

export function ProjectFinalCta({
  eyebrow,
  title,
  paragraphs,
  primary,
  secondary
}: ProjectPageCta) {
  return (
    <div className="editorial-light-panel px-6 py-8 text-ink sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="space-y-6">
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8f7430]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-4xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="max-w-3xl space-y-4 text-base leading-7 text-ink/78 sm:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
          <Link href={primary.href} className="gold-fill-btn justify-center sm:justify-start">
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="gold-outline-btn justify-center border-black/15 text-ink hover:bg-black/[0.03] sm:justify-start"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
