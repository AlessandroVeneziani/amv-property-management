import Image from "next/image";
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
  image,
  displayMode = "immersive",
  imageWidth,
  imageHeight
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

      {displayMode === "intrinsic" && imageWidth && imageHeight ? (
        <figure className="overflow-hidden rounded-[34px] border border-line shadow-glow">
          <Image
            src={image.src}
            alt={image.alt}
            width={imageWidth}
            height={imageHeight}
            sizes="(min-width: 1024px) 82vw, 100vw"
            className="h-auto w-full"
            priority={false}
          />
        </figure>
      ) : (
        <figure className="relative aspect-[16/10] min-h-[26rem] overflow-hidden rounded-[34px] border border-line shadow-glow sm:min-h-[34rem]">
          <ProjectResponsiveImage
            image={image}
            sizes="(min-width: 1024px) 82vw, 100vw"
            className="object-cover"
          />
        </figure>
      )}
    </div>
  );
}

export function ProjectFocusBlock({
  eyebrow,
  title,
  items,
  layout = "default"
}: ProjectPageFocusSection) {
  const isEmphasized = layout === "emphasized";

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
          <div
            key={item.label}
            className={`px-0 md:px-6 md:first:pl-0 md:last:pr-0 ${
              isEmphasized ? "space-y-5 py-7" : "space-y-4 py-6"
            }`}
          >
            <p
              className={`uppercase text-accent/92 ${
                isEmphasized
                  ? "text-[12px] tracking-[0.26em]"
                  : "text-[11px] tracking-[0.24em]"
              }`}
            >
              {item.label}
            </p>
            <p
              className={`max-w-sm text-muted ${
                isEmphasized
                  ? "text-[1.04rem] leading-7 sm:text-[1.12rem] sm:leading-8"
                  : "text-base leading-7 sm:text-lg"
              }`}
            >
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
  images,
  layout = "default",
  captions
}: ProjectPageGallerySection) {
  if (layout === "origin-editorial") {
    const [leadImage, ...supportImages] = images;

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

        <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
          {leadImage ? (
            <figure className="relative overflow-hidden rounded-[32px] border border-line shadow-glow lg:col-span-7">
              <div className="relative aspect-[16/11] min-h-[23rem] sm:min-h-[27rem]">
                <ProjectResponsiveImage
                  image={leadImage}
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
            {supportImages.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className={`relative overflow-hidden rounded-[28px] border border-line shadow-glow ${
                  index === supportImages.length - 1 && supportImages.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === supportImages.length - 1 && supportImages.length % 2 === 1
                      ? "aspect-[16/10] min-h-[14rem]"
                      : "aspect-[4/3] min-h-[14rem]"
                  }`}
                >
                  <ProjectResponsiveImage
                    image={image}
                    sizes={
                      index === supportImages.length - 1 && supportImages.length % 2 === 1
                        ? "(min-width: 1024px) 30vw, 100vw"
                        : "(min-width: 1024px) 24vw, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (layout === "plan-pair") {
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

        <div className="grid gap-5 lg:grid-cols-2">
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="architectural-board flex flex-col gap-4 rounded-[30px] px-5 py-5 sm:px-6 sm:py-6"
            >
              {captions?.[index] ? (
                <figcaption className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8f7430]">
                    {captions[index].title}
                  </p>
                  {captions[index].subtitle ? (
                    <p className="text-sm tracking-[0.04em] text-ink/56">
                      {captions[index].subtitle}
                    </p>
                  ) : null}
                </figcaption>
              ) : null}
              <div className="architectural-paper relative aspect-[4/3] min-h-[18rem] overflow-hidden rounded-[24px] border border-black/8">
                <ProjectResponsiveImage
                  image={image}
                  sizes="(min-width: 1024px) 39vw, 100vw"
                  className={
                    image.fit === "contain"
                      ? "object-contain p-4 sm:p-5"
                      : "object-cover"
                  }
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    );
  }

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
  items,
  layout = "stack"
}: ProjectPageRenderSequenceSection) {
  if (layout === "editorial-chapter") {
    const [leadItem, ...supportItems] = items;

    return (
      <div className="space-y-6 sm:space-y-7">
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

        {leadItem ? (
          <figure className="space-y-4">
            <div className="flex items-baseline gap-4 border-t border-line/80 pt-3.5 sm:pt-4">
              <p className="text-[11px] uppercase tracking-[0.24em] text-accent/78">01</p>
              <h3 className="font-serif text-2xl text-sand sm:text-[2rem]">
                {leadItem.title}
              </h3>
            </div>

            <div
              className="relative overflow-hidden rounded-[32px] border border-line shadow-glow"
              style={{ aspectRatio: `${leadItem.width} / ${leadItem.height}` }}
            >
              <ProjectResponsiveImage
                image={leadItem.image}
                sizes="(min-width: 1024px) 82vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        ) : null}

        {supportItems.length ? (
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {supportItems.map((item, index) => (
              <figure key={item.id} className="space-y-3">
                <div className="flex items-baseline gap-3 border-t border-line/60 pt-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-accent/72">
                    {String(index + 2).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-xl text-sand sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div
                  className={`relative overflow-hidden rounded-[28px] border border-line shadow-glow ${
                    supportItems.length === 3 && index === 2 ? "lg:col-span-2" : ""
                  }`}
                  style={{ aspectRatio: `${item.width} / ${item.height}` }}
                >
                  <ProjectResponsiveImage
                    image={item.image}
                    sizes={
                      supportItems.length === 3 && index === 2
                        ? "(min-width: 1024px) 82vw, 100vw"
                        : "(min-width: 1024px) 39vw, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

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
