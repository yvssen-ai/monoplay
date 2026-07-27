"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const MARQUEE_ITEMS = [
  "MONOPLAY", "200+ GAMES", "BOARD GAMES", "CARD NIGHT", "STRATEGY",
  "PARTY GAMES", "COFFEE & DICE", "CAIRO", "GAME ON",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
      return () => {
        tween.kill();
      };
    },
    { scope: trackRef }
  );

  return (
    <div className="overflow-hidden border-y border-border bg-secondary/20 py-8">
      <div ref={trackRef} className="flex w-max flex-nowrap whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {MARQUEE_ITEMS.map((item, index) => (
              <span
                key={index}
                className="mx-6 flex items-center text-3xl font-headline font-bold text-transparent"
                style={{ WebkitTextStroke: "1px hsl(var(--accent) / 0.4)" }}
              >
                {item}
                <span className="ml-6 h-1.5 w-1.5 rounded-full bg-primary/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
