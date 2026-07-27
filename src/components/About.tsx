"use client";

import { useRef } from "react";
import { Library, Users2, Sofa } from "lucide-react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const HIGHLIGHTS = [
  { icon: Library, title: "200+ Games", desc: "Strategy, party, card & cooperative — there's always a table for your group." },
  { icon: Users2, title: "Game Masters", desc: "Our team teaches the rules so you can jump straight into the fun." },
  { icon: Sofa, title: "Cozy Vibes", desc: "Great coffee, snacks, and seating built for long, loud game nights." },
];

const STATS = [
  { value: 200, suffix: "+", label: "Games in Library" },
  { value: 4, suffix: "", label: "Branches in Cairo" },
  { value: 47, suffix: "K+", label: "Community Members" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-card", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cards",
          start: "top 80%",
        },
      });

      const counters = gsap.utils.toArray<HTMLElement>(".about-stat-value");
      counters.forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(proxy.val).toString();
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="border-t border-border px-6 py-20">
      <span className="about-reveal mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        Our Story
      </span>
      <h2 className="about-reveal mb-6 text-4xl font-headline font-bold leading-tight">
        Egypt&apos;s first cafe built entirely around{" "}
        <span className="text-primary">the table.</span>
      </h2>
      <p className="about-reveal mb-12 leading-relaxed text-muted-foreground">
        Monoplay started with one idea — people needed a place to put their phones
        down and actually play something together. Today it&apos;s Cairo&apos;s
        go-to spot for board games, card nights, and the friends you make along
        the way.
      </p>

      <div className="about-cards mb-12 flex flex-col gap-4">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.title}
            className="about-card flex items-start gap-4 rounded-3xl border border-border bg-card/60 p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-1 font-headline text-lg">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about-reveal grid grid-cols-3 gap-3 rounded-3xl bg-primary p-6 text-center text-primary-foreground">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-headline text-3xl font-bold">
              <span className="about-stat-value" data-value={stat.value}>
                0
              </span>
              {stat.suffix}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-primary-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
