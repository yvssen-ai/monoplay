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

  const DOT_COLORS = ["bg-accent", "bg-primary", "bg-brand-sky"];

  return (
    <div className="overflow-hidden border-y-2 border-accent/30 bg-secondary/20 py-8">
      <div ref={trackRef} className="flex w-max flex-nowrap whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {MARQUEE_ITEMS.map((item, index) => (
              <span
                key={index}
                className="mx-6 flex items-center font-pixel text-lg uppercase text-transparent"
                style={{ WebkitTextStroke: "1px hsl(var(--accent) / 0.5)" }}
              >
                {item}
                <span className={`ml-6 h-2 w-2 rounded-full ${DOT_COLORS[index % DOT_COLORS.length]}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
