"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const IMAGES = [
  { src: "https://picsum.photos/seed/monoplay-gallery1/600/800", size: "tall", alt: "Friends deep in strategy over Catan" },
  { src: "https://picsum.photos/seed/monoplay-gallery2/600/400", size: "small", alt: "Card game night" },
  { src: "https://picsum.photos/seed/monoplay-gallery3/600/400", size: "small", alt: "Latte at the Monoplay counter" },
  { src: "https://picsum.photos/seed/monoplay-gallery4/800/600", size: "wide", alt: "The game library shelves" },
  { src: "https://picsum.photos/seed/monoplay-gallery5/600/800", size: "tall", alt: "Drawing Codenames cards" },
  { src: "https://picsum.photos/seed/monoplay-gallery6/600/400", size: "small", alt: "A cozy corner table" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".gallery-item", {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="gallery" ref={sectionRef} className="px-6 py-20">
      <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        Game Nights
      </span>
      <h2 className="mb-8 text-3xl font-headline font-bold leading-tight">
        Captured at the <span className="text-primary">Table</span>
      </h2>

      <div className="grid auto-rows-[130px] grid-cols-2 gap-3">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`gallery-item group relative overflow-hidden rounded-2xl ${
              img.size === "tall" ? "row-span-2" : img.size === "wide" ? "col-span-2" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-active:scale-110"
              data-ai-hint="board game cafe"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
