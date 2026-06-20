"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
  { title: "Specialty Beans", desc: "Premium beans sourced for consistency." },
  { title: "Handcrafted Daily", desc: "Every drink prepared fresh." },
  { title: "Cozy Experience", desc: "Designed for conversations." }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-8 lg:px-20 bg-background overflow-hidden border-t">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-headline mb-8">Crafting Moments worth <span className="text-accent italic">slowing down for.</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            At CURIO, we believe great coffee is about precision, warmth, and creating moments that resonate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <h4 className="font-headline text-xl mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
