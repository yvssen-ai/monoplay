"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HIGHLIGHTS = [
  { icon: "☕", title: "Specialty Beans", desc: "Premium beans sourced for rich flavor and consistency." },
  { icon: "🌿", title: "Handcrafted Daily", desc: "Every drink prepared fresh by skilled baristas." },
  { icon: "✨", title: "Cozy Experience", desc: "Designed for conversations, work, and relaxation." }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-8 lg:px-20 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] rounded-[3rem] overflow-hidden"
        >
          <Image
            src="https://picsum.photos/seed/curio-about/800/1000"
            alt="Curio Interior"
            fill
            className="object-cover"
            data-ai-hint="minimalist cafe"
          />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-headline mb-8">Crafting Moments worth <span className="text-accent italic">slowing down for.</span></h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
              At CURIO, every cup begins with curiosity. From carefully selected beans to handcrafted 
              brewing techniques, we believe great coffee is about precision, warmth, and 
              creating moments that resonate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-6 p-6 rounded-3xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
              >
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <div>
                  <h4 className="font-headline text-xl mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}