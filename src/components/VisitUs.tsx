"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Wifi, Zap } from "lucide-react";

export default function VisitUs() {
  return (
    <section id="visit" className="py-32 px-8 lg:px-20 bg-background">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-headline mb-12">Visit <span className="text-accent">CURIO</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <MapPin className="w-5 h-5" />
                <h4 className="font-headline text-lg uppercase tracking-widest">Location</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                123 Curiosity Lane, Al Quoz 1<br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Clock className="w-5 h-5" />
                <h4 className="font-headline text-lg uppercase tracking-widest">Opening Hours</h4>
              </div>
              <div className="text-muted-foreground text-sm space-y-2">
                <p className="flex justify-between"><span>Sun — Thu</span> <span>8:00 AM – 12:00 AM</span></p>
                <p className="flex justify-between"><span>Fri — Sat</span> <span>8:00 AM – 2:00 AM</span></p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Wifi className="w-5 h-5" />
                <h4 className="font-headline text-lg uppercase tracking-widest">Utility</h4>
              </div>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li className="flex items-center gap-2"><Zap className="w-3 h-3" /> High-speed Wi-Fi</li>
                <li className="flex items-center gap-2"><Zap className="w-3 h-3" /> Power outlets available</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Phone className="w-5 h-5" />
                <h4 className="font-headline text-lg uppercase tracking-widest">Contact</h4>
              </div>
              <p className="text-muted-foreground">+971 4 000 0000</p>
              <p className="text-muted-foreground">hello@curio.coffee</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] bg-secondary/30 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center border-2 border-dashed border-accent/20"
        >
          {/* Placeholder for Interactive Map */}
          <div className="text-center p-8">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-muted-foreground font-headline text-xl">Interactive Map Experience</p>
            <p className="text-xs text-muted-foreground/60 mt-2">Dubai, Al Quoz District</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}