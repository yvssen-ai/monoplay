"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-24 px-8 lg:px-20 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Specialty Studio</span>
          <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight mb-8">
            CRAFTED <br /> CURIOSITY. <br /> <span className="text-accent">POURED DAILY.</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-10 h-14 bg-primary text-primary-foreground text-base hover:bg-primary/90">
            Explore Menu
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-accent text-accent hover:bg-accent hover:text-white transition-all">
            Visit Curio
          </Button>
        </motion.div>
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
