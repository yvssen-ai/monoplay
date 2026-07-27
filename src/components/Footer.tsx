"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Music2, Facebook, ArrowUp } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/monoplaycafe/", label: "Instagram" },
  { icon: Music2, href: "https://www.tiktok.com/@monoplaycafe", label: "TikTok" },
  { icon: Facebook, href: "https://www.facebook.com/p/Monoplay-cafe-100093859838876/", label: "Facebook" },
];

export default function Footer() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!buttonRef.current) return;
    const el = buttonRef.current;
    const onEnter = () => gsap.to(el.querySelector(".footer-top-icon"), { y: -3, duration: 0.25, ease: "power2.out" });
    const onLeave = () => gsap.to(el.querySelector(".footer-top-icon"), { y: 0, duration: 0.25, ease: "power2.out" });
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="halftone rounded-t-[2.5rem] bg-primary px-6 pb-10 pt-16 text-primary-foreground">
      <div className="mb-12">
        <Image
          src="/brand/logo-crop.jpg"
          alt="Monoplay Board Games Cafe"
          width={597}
          height={487}
          className="h-14 w-auto rounded-xl"
        />
      </div>

      <div className="mb-10 flex gap-3">
        {SOCIALS.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white hover:text-primary"
          >
            <social.icon className="h-4 w-4" />
          </Link>
        ))}
      </div>

      <div className="mb-10 grid grid-cols-2 gap-8">
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">Navigate</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#games" className="hover:text-white">Games</Link></li>
            <li><Link href="#menu" className="hover:text-white">Menu</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">Egypt&apos;s 1st</h4>
          <p className="text-sm text-primary-foreground/80">
            Board games cafe — Cairo. 4 branches, 200+ games, endless game nights.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-8">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Monoplay Cafe. All rights reserved.
        </p>
        <button
          ref={buttonRef}
          onClick={scrollToTop}
          className="flex items-center gap-2 text-primary-foreground/60 hover:text-white"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Back to top</span>
          <div className="footer-top-icon flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
            <ArrowUp className="h-3 w-3" />
          </div>
        </button>
      </div>
    </footer>
  );
}
