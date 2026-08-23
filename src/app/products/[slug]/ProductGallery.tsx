"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

type ProductGalleryProps = {
  name: string;
  image: StaticImageData;
  galleryImages: StaticImageData[];
};

export default function ProductGallery({
  name,
  image,
  galleryImages,
}: ProductGalleryProps) {
  const images = [
    { src: image, alt: name },
    ...galleryImages.map((src, i) => ({
      src,
      alt: `${name} being worn ${i + 1}`,
    })),
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-light">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
          priority
        />
      </div>
      <div className="mt-4 flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] w-20 overflow-hidden rounded-lg border-2 transition-colors ${
              active === i ? "border-primary" : "border-transparent"
            }`}
            aria-label={`Show ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
