"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoffeeExperience() {
  return (
    <section className="py-32 px-8 lg:px-20 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-headline mb-10"
          >
            The Art of <br /> <span className="text-accent italic">The Experience</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Every cup at CURIO is prepared with patience, precision, and curiosity. 
              From the first grind to the final pour, we believe coffee should be an 
              experience—not just a drink.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We collaborate with specialty roasters who share our commitment to 
              ethical sourcing and exceptional flavor profiles. Whether it's a 
              V60 pour-over or a complex signature latte, the attention to 
              detail remains unwavering.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative aspect-square order-1 lg:order-2 rounded-[3.5rem] overflow-hidden shadow-2xl"
        >
          <Image
            src="https://picsum.photos/seed/curio-brew-exp/1000/1000"
            alt="Barista brewing"
            fill
            className="object-cover"
            data-ai-hint="barista brewing"
          />
        </motion.div>
      </div>
    </section>
  );
}