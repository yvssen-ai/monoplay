"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  { src: 'https://picsum.photos/seed/curio1/600/800', size: 'tall' },
  { src: 'https://picsum.photos/seed/curio2/600/400', size: 'small' },
  { src: 'https://picsum.photos/seed/curio3/600/400', size: 'small' },
  { src: 'https://picsum.photos/seed/curio4/800/600', size: 'wide' },
  { src: 'https://picsum.photos/seed/curio5/600/800', size: 'tall' },
  { src: 'https://picsum.photos/seed/curio6/600/400', size: 'small' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-8 lg:px-20 bg-secondary/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-headline mb-6">Captured <span className="text-accent">Curiosity</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the life at CURIO. Where light meets steam and every bean is celebrated.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[200px] md:auto-rows-[250px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-xl transition-all ${
                img.size === 'tall' ? 'row-span-2' : 
                img.size === 'wide' ? 'col-span-2' : ''
              }`}
            >
              <Image 
                src={img.src} 
                alt={`Curio Gallery ${i}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint="coffee lifestyle"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-headline text-xl">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}