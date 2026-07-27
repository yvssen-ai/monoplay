"use client";

import { useRef } from "react";
import Image from "next/image";
import { Users, Clock, MoveRight } from "lucide-react";
import { GAME_ITEMS } from "@/lib/games-data";
import { gsap, useGSAP } from "@/lib/gsap";

const DIFFICULTY_COLOR: Record<string, string> = {
  Easy: "bg-brand-sky text-brand-sky-foreground",
  Medium: "bg-accent text-accent-foreground",
  Hard: "bg-primary text-primary-foreground",
};

export default function FeaturedGames() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featured = GAME_ITEMS.filter((g) => g.isSignature);

  useGSAP(
    () => {
      gsap.from(".game-card", {
        opacity: 0,
        x: 48,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".swipe-hint", {
        x: 6,
        duration: 0.7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="games" ref={sectionRef} className="py-20">
      <div className="mb-8 flex items-end justify-between px-6">
        <div>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Fan Favorites
          </span>
          <h2 className="text-3xl font-headline font-bold leading-tight">
            Popular <span className="text-primary">Games</span>
          </h2>
        </div>
        <div className="swipe-hint flex items-center gap-1 text-xs text-muted-foreground">
          Swipe <MoveRight className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="no-scrollbar snap-x-mandatory flex gap-4 overflow-x-auto px-6 pb-4">
        {featured.map((game) => (
          <div
            key={game.id}
            className="game-card snap-center w-64 shrink-0 overflow-hidden rounded-3xl border-2 border-black bg-card"
          >
            <div className="relative h-36 w-full">
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover"
                data-ai-hint={game.category.toLowerCase()}
              />
              <span
                className={`absolute right-3 top-3 rounded-full border-2 border-black px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${DIFFICULTY_COLOR[game.difficulty]}`}
              >
                {game.difficulty}
              </span>
            </div>
            <div className="p-5">
              <h3 className="mb-1 font-headline text-lg">{game.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {game.tagline}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> {game.players}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {game.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
