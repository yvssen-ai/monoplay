"use client";

import { motion } from "framer-motion";
import { MENU_ITEMS } from "@/lib/menu-data";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignatureDrinks() {
  const signatures = MENU_ITEMS.filter(item => item.isSignature);

  return (
    <section className="py-24 px-8 lg:px-20 bg-secondary/10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-headline">Our <span className="text-accent">Signatures</span></h2>
          <Link href="#menu" className="hidden md:flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
            Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatures.map((drink, i) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border border-border/50 bg-background rounded-2xl hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <h3 className="text-xl font-headline mb-2">{drink.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-medium">{drink.price} EGP</span>
                    <div className="p-2 rounded-full bg-secondary/30">
                      <ArrowRight className="w-4 h-4" />
                    </div>
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
