"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "CURIO", "SPECIALTY COFFEE", "ESPRESSO", "MATCHA", "HANDCRAFTED", "LATTE", 
  "QUALITY", "BREWED DAILY", "KARAK", "POUR OVER", "ORIGIN", "ARTISAN"
];

export default function Marquee() {
  return (
    <div className="py-20 border-y border-accent/10 overflow-hidden bg-secondary/20">
      <div className="flex whitespace-nowrap animate-marquee hover:pause">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {MARQUEE_ITEMS.map((item, index) => (
              <span 
                key={index} 
                className="text-6xl md:text-8xl font-headline font-bold mx-12 text-transparent stroke-accent/40"
                style={{ WebkitTextStroke: '1px hsl(var(--accent) / 0.3)' }}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}