"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 px-8 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-[1400px] mx-auto z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6 block">Specialty Studio</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[1.1] mb-8">
              CRAFTED <br /> CURIOSITY. <br /> <span className="text-accent">POURED DAILY.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg"
          >
            Curio is a destination for the intentional. We treat coffee as an art form, 
            focusing on the precision of the pour and the warmth of the craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full px-10 h-14 bg-primary text-primary-foreground text-base hover:bg-primary/90">
              Explore Menu
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-accent text-accent hover:bg-accent hover:text-white transition-all">
              Visit Curio
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-[600px] ml-auto"
        >
          <div className="absolute -inset-4 border border-accent/20 rounded-[3rem] -z-10" />
          <Image
            src="https://picsum.photos/seed/curio-hero-main/1000/1200"
            alt="Premium Espresso Pour"
            fill
            className="object-cover rounded-[2.5rem] shadow-2xl"
            priority
            data-ai-hint="coffee pour"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-accent/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}