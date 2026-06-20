
"use client";

import { motion } from "framer-motion";
import { MENU_ITEMS } from "@/lib/menu-data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignatureDrinks() {
  const signatures = MENU_ITEMS.filter(item => item.isSignature);

  return (
    <section className="py-32 px-8 lg:px-20 bg-secondary/20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-headline mb-6">Our <span className="text-accent">Signatures</span></h2>
            <p className="text-muted-foreground text-lg">
              The heart of our studio. Handcrafted drinks that define the CURIO experience.
            </p>
          </div>
          <Link href="#menu" className="hidden md:flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all">
            View All Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide">
          {signatures.map((drink, i) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="min-w-[300px] md:min-w-[400px] snap-center"
            >
              <Card className="border-none bg-background rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    data-ai-hint={drink.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm leading-relaxed">{drink.description}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-headline mb-2">{drink.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-medium">Starting from {drink.price} EGP</span>
                    <Link href="#menu" className="p-2 rounded-full bg-secondary/50 group-hover:bg-accent group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
