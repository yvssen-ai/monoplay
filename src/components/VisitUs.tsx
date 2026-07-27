"use client";

import { useRef } from "react";
import { MapPin, Clock, Instagram, Music2 } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const BRANCHES = [
  { name: "Almaza City Centre", area: "Beside EgyptAir Hospital, Heliopolis" },
  { name: "Mall of Egypt", area: "Gate A1, 6th of October" },
  { name: "The Yard", area: "El Rehab City, Gate 6" },
  { name: "Grip 'N Climb — CFC", area: "New Cairo" },
];

export default function VisitUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".visit-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".branch-card", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".branch-list",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="visit" ref={sectionRef} className="px-6 py-20">
      <span className="visit-reveal mb-3 block font-pixel text-[10px] uppercase tracking-widest text-accent">
        Find Us
      </span>
      <h2 className="visit-reveal mb-8 text-3xl font-headline font-bold leading-tight">
        Visit <span className="text-primary">Monoplay</span>
      </h2>

      <div className="branch-list mb-8 flex flex-col gap-3">
        {BRANCHES.map((branch) => (
          <div
            key={branch.name}
            className="branch-card flex items-start gap-3 rounded-2xl border-2 border-border bg-card/60 p-5"
          >
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h4 className="font-headline text-base">{branch.name}</h4>
              <p className="text-sm text-muted-foreground">{branch.area}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="visit-reveal mb-6 flex items-start gap-3 rounded-2xl border-2 border-border bg-secondary/30 p-5">
        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-sky" />
        <div>
          <h4 className="font-headline text-base">Opening Hours</h4>
          <p className="text-sm text-muted-foreground">
            Hours vary by branch and mall — check our Instagram for today&apos;s times.
          </p>
        </div>
      </div>

      <div className="visit-reveal flex gap-3">
        <a
          href="https://www.instagram.com/monoplaycafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arcade flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-pixel text-[10px] uppercase text-primary-foreground"
        >
          <Instagram className="h-4 w-4" /> Instagram
        </a>
        <a
          href="https://www.tiktok.com/@monoplaycafe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arcade flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black py-4 font-pixel text-[10px] uppercase text-white"
        >
          <Music2 className="h-4 w-4" /> TikTok
        </a>
      </div>
    </section>
  );
}
