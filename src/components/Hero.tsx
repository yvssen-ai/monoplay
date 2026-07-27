"use client";

import { useRef } from "react";
import { Dices, Gamepad2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";

const HEADLINE_LINES = ["YOUR NEXT", "GAME NIGHT", "STARTS HERE"];

const STATS = [
  { value: "200+", label: "Games" },
  { value: "4", label: "Branches" },
  { value: "47K+", label: "Players" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 1.9, defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: -12, scale: 0.9, duration: 0.5 })
        .from(
          ".hero-line",
          { yPercent: 120, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power4.out" },
          "-=0.2"
        )
        .from(".hero-sub", { opacity: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from(".hero-cta", { opacity: 0, y: 16, duration: 0.55, stagger: 0.1 }, "-=0.35")
        .from(".hero-stat", { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-piece", { opacity: 0, scale: 0, stagger: 0.1, duration: 0.6, ease: "back.out(2)" }, "-=0.6");

      gsap.to(".hero-piece-1", { y: -14, rotate: 12, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".hero-piece-2", { y: 10, rotate: -10, duration: 3.1, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.3 });
      gsap.to(".hero-piece-3", { y: -8, rotate: 8, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.6 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden px-6 pb-16 pt-32"
    >
      <div className="board-dots pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-16 top-10 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 top-72 -z-10 h-56 w-56 rounded-full bg-accent/20 blur-[80px]" />

      {/* Floating game pieces */}
      <div className="hero-piece hero-piece-1 absolute right-8 top-24 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
        <Dices className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="hero-piece hero-piece-2 absolute right-4 top-[19rem] flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30">
        <Sparkles className="h-5 w-5 text-accent-foreground" />
      </div>
      <div className="hero-piece hero-piece-3 absolute left-4 top-64 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card shadow-lg">
        <Gamepad2 className="h-5 w-5 text-accent" />
      </div>

      <div className="hero-badge mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
        <Dices className="h-3.5 w-3.5" />
        Egypt&apos;s First Board Games Cafe
      </div>

      <h1 className="mb-6 text-6xl font-headline font-bold leading-[0.95] tracking-tighter">
        {HEADLINE_LINES.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-1">
            <span
              className={`hero-line block ${i === 1 ? "text-primary" : ""}`}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>

      <p className="hero-sub mb-10 max-w-sm text-lg leading-relaxed text-muted-foreground">
        200+ board &amp; card games, bottomless coffee, and a table that&apos;s always
        got room for one more. Cairo&apos;s home for game nights.
      </p>

      <div className="mb-12 flex flex-col gap-3">
        <Button
          asChild
          size="lg"
          className="hero-cta h-14 rounded-full bg-primary text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
        >
          <a href="#games">Explore Games</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="hero-cta h-14 rounded-full border-border text-sm font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background"
        >
          <a href="#visit">Reserve a Table</a>
        </Button>
      </div>

      <div className="hero-stats grid grid-cols-3 gap-3 rounded-3xl border border-border bg-card/60 p-5">
        {STATS.map((stat) => (
          <div key={stat.label} className="hero-stat text-center">
            <p className="font-headline text-2xl font-bold text-accent">{stat.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
