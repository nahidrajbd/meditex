"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type Slide = {
  src: StaticImageData;
  alt: string;
};

type HeroSlideshowProps = {
  slides: Slide[];
  interval?: number;
  className?: string;
};

export default function HeroSlideshow({
  slides,
  interval = 4500,
  className = "",
}: HeroSlideshowProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={i === 0}
        />
      ))}
    </div>
  );
}
