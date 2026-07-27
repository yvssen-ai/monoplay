"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".loader-coin", { opacity: 0.25, duration: 0.6, ease: "power1.inOut", yoyo: true, repeat: -1 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.set(containerRef.current, { autoAlpha: 1 })
        .from(".loader-logo", {
          scale: 0.4,
          opacity: 0,
          rotate: -8,
          duration: 0.6,
          ease: "back.out(2.4)",
        })
        .to(".loader-logo", { rotate: 3, duration: 0.3, ease: "power1.inOut" })
        .to(".loader-logo", { rotate: 0, duration: 0.3, ease: "power1.inOut" })
        .fromTo(
          ".loader-bar-fill",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
          "-=0.2"
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
      className="invisible fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="loader-logo">
          <Image
            src="/brand/logo-crop.jpg"
            alt="Monoplay"
            width={597}
            height={487}
            priority
            className="w-48 rounded-2xl"
          />
        </div>
        <p className="loader-coin text-xs font-bold uppercase tracking-[0.3em] text-brand-sky">
          Insert Coin To Start
        </p>
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
          <div className="loader-bar-fill h-full w-full origin-left rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
