"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 px-8 lg:px-20 rounded-t-[3rem]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-6 tracking-widest">CURIO</h2>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-6">Navigate</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#menu" className="hover:text-white transition-colors">Menu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg mb-6">Visit Us</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li>123 Curiosity St, Dubai, UAE</li>
              <li>+971 4 000 0000</li>
              <li>hello@curio.coffee</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} CURIO Coffee Studio.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-white transition-all"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
