"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-8 lg:px-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12">
          {/* Left Side: Heading & CTA */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent font-medium tracking-[0.4em] uppercase text-[10px] mb-8 block">
                The Specialty Studio
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold leading-[0.9] tracking-tighter mb-12">
                CRAFTED <br /> CURIOSITY. <br /> 
                <span className="text-accent">POURED DAILY.</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <Button size="lg" className="rounded-full px-12 h-14 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all uppercase tracking-widest">
                Explore Menu
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-12 h-14 text-sm font-semibold border-border text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-widest">
                Our Story
              </Button>
            </motion.div>
          </div>

          {/* Right Side: Minimalist Info */}
          <div className="lg:col-span-4 hidden lg:block border-l border-border pl-12">
            <motion.div
              initial={{ opacity: 0, opacity: 0 }}
              animate={{ opacity: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 font-bold">Concept</h4>
                <p className="text-lg leading-relaxed text-foreground/80 font-light">
                  A sanctuary for the curious palate. Where precision meets warmth in every single pour.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 font-bold">Philosophy</h4>
                <p className="text-lg leading-relaxed text-foreground/80 font-light">
                  Less but better. The intentional pursuit of exceptional coffee experiences.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-5xl font-headline text-accent/20">EST. 2024</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
