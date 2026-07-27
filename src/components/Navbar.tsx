"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Games", href: "#games" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      if (!menuRef.current) return;

      if (isOpen) {
        gsap.set(menuRef.current, { display: "flex" });
        gsap
          .timeline()
          .fromTo(
            menuRef.current,
            { xPercent: 100 },
            { xPercent: 0, duration: 0.5, ease: "power4.out" }
          )
          .from(
            ".mobile-nav-link",
            { opacity: 0, y: 24, stagger: 0.06, duration: 0.4, ease: "power2.out" },
            "-=0.25"
          )
          .from(".mobile-nav-cta", { opacity: 0, y: 16, duration: 0.4, ease: "power2.out" }, "-=0.15");
      } else {
        gsap.to(menuRef.current, {
          xPercent: 100,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => gsap.set(menuRef.current, { display: "none" }),
        });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 transition-all duration-500",
          isScrolled ? "glass border-b py-4 shadow-sm" : "bg-transparent"
        )}
      >
        <Link href="#home" className="flex items-center gap-2 text-lg font-headline font-bold tracking-widest">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Dices className="h-4 w-4 text-primary-foreground" />
          </span>
          MONOPLAY
        </Link>
        <button
          className="-mr-2 p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] hidden flex-col bg-background p-8"
      >
        <div className="mb-16 flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-headline font-bold tracking-widest">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Dices className="h-4 w-4 text-primary-foreground" />
            </span>
            MONOPLAY
          </span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mobile-nav-link text-4xl font-headline font-light"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mobile-nav-cta mt-auto border-t border-border pt-8">
          <Button asChild size="lg" className="w-full rounded-full py-7 text-lg">
            <Link href="#visit" onClick={() => setIsOpen(false)}>
              Reserve a Table
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
