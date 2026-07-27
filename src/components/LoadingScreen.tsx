"use client";

import { useRef } from "react";
import { Dices } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const LETTERS = "MONOPLAY".split("");

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.set(containerRef.current, { autoAlpha: 1 })
        .from(".loader-dice", {
          scale: 0,
          rotate: -200,
          duration: 0.55,
          ease: "back.out(2.2)",
        })
        .to(".loader-dice", { rotate: 340, duration: 0.9, ease: "power2.inOut" }, "-=0.1")
        .from(
          ".loader-letter",
          { yPercent: 120, opacity: 0, stagger: 0.035, duration: 0.55, ease: "power3.out" },
          "-=0.75"
        )
        .fromTo(
          ".loader-bar-fill",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
          "-=0.35"
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
          delay: 0.2,
        })
        .set(containerRef.current, { pointerEvents: "none" });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="invisible fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="loader-dice flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
          <Dices className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="flex overflow-hidden text-3xl font-headline font-bold tracking-[0.3em]">
          {LETTERS.map((letter, i) => (
            <span key={i} className="loader-letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-secondary">
          <div className="loader-bar-fill h-full w-full origin-left rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
