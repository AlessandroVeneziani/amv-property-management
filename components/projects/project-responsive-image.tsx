import Image from "next/image";

import type { ProjectPageImage } from "@/content/projects";

type ProjectResponsiveImageProps = {
  image: ProjectPageImage;
  sizes: string;
  priority?: boolean;
  className?: string;
};

const getObjectPositionStyle = (position?: string) =>
  position ? { objectPosition: position } : undefined;

export function ProjectResponsiveImage({
  image,
  sizes,
  priority = false,
  className = "object-cover"
}: ProjectResponsiveImageProps) {
  const mobilePosition = image.mobileObjectPosition ?? image.objectPosition;

  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${className} md:hidden`}
        style={getObjectPositionStyle(mobilePosition)}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${className} hidden md:block`}
        style={getObjectPositionStyle(image.objectPosition)}
      />
    </>
  );
}
