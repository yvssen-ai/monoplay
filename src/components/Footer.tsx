"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-12 px-8 lg:px-20 rounded-t-[4rem]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl font-headline font-bold mb-8 tracking-widest">CURIO</h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-md mb-8">
              A premium specialty coffee studio dedicated to the craft of the pour and 
              the curiosity of the palate. Join us for a unique experience.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-xl mb-8">Navigate</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="#visit" className="hover:text-white transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-xl mb-8">Visit Us</h4>
            <ul className="space-y-4 text-primary-foreground/70 text-sm">
              <li>123 Curiosity St, Coffee District</li>
              <li>Dubai, UAE</li>
              <li>+971 4 000 0000</li>
              <li>hello@curio.coffee</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} CURIO Coffee Studio. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-primary-foreground/60 hover:text-white transition-all"
          >
            <span className="text-sm font-medium">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}