"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const PHOTOS = [
  {
    src: "/brand/photo-chess.jpg",
    alt: "Friends playing chess with popcorn and a Monoplay coffee cup",
    caption: "Chess Night",
    rotate: -6,
  },
  {
    src: "/brand/photo-unicorns.jpg",
    alt: "Unstable Unicorns card game with fries and popcorn",
    caption: "Unstable Unicorns",
    rotate: 4,
  },
  {
    src: "/brand/photo-risk.jpg",
    alt: "A game of Risk with dice, popcorn and a Play Eat Repeat drink",
    caption: "Risk & Popcorn",
    rotate: -3,
  },
];

export default function PlayEatRepeat() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Deferred a frame so this off-screen section's ScrollTrigger setup
      // (which forces synchronous layout reads) never lands inside the same
      // paint as the hero's critical entrance animation.
      const raf = requestAnimationFrame(() => {
        gsap.from(".per-reveal", {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        });

        gsap.utils.toArray<HTMLElement>(".per-card").forEach((card, i) => {
          const targetRotate = Number(card.dataset.rotate || 0);
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, rotate: 0, scale: 0.85 },
            {
              opacity: 1,
              y: 0,
              rotate: targetRotate,
              scale: 1,
              duration: 0.7,
              delay: i * 0.15,
              ease: "back.out(1.6)",
              scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
            }
          );
        });
      });
      return () => cancelAnimationFrame(raf);
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="halftone px-6 pb-20 pt-4">
      <span className="per-reveal mb-3 block font-pixel text-[10px] uppercase tracking-widest text-brand-sky">
        The Vibe
      </span>
      <h2 className="per-reveal text-pop mb-10 text-4xl font-headline font-bold uppercase leading-[0.95] text-accent">
        Play. Eat.
        <br />
        Repeat.
      </h2>

      <div className="relative flex flex-col items-center gap-10 py-4">
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            data-rotate={photo.rotate}
            className="per-card frame-arcade relative w-[78%] max-w-[280px] overflow-hidden rounded-2xl bg-card"
            style={{ zIndex: PHOTOS.length - i }}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
              <p className="font-pixel text-[10px] uppercase text-accent">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
