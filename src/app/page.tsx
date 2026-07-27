"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlayEatRepeat from "@/components/PlayEatRepeat";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FeaturedGames from "@/components/FeaturedGames";
import MenuSection from "@/components/MenuSection";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background selection:bg-accent/30">
      <LoadingScreen />

      <Navbar />
      <Hero />
      <PlayEatRepeat />
      <Marquee />

      <About />
      <FeaturedGames />
      <MenuSection />

      <VisitUs />

      <section className="px-6 py-16 text-center">
        <div className="halftone relative overflow-hidden rounded-[2rem] bg-primary p-10">
          <h2 className="text-pop-sky mb-8 text-3xl font-headline font-bold uppercase text-primary-foreground">
            Ready for game night?
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="#visit"
              className="btn-arcade rounded-2xl bg-accent px-8 py-4 font-headline font-bold uppercase text-accent-foreground"
            >
              Reserve a Table
            </a>
            <a
              href="#games"
              className="btn-arcade rounded-2xl bg-black px-8 py-4 font-headline font-bold uppercase text-white"
            >
              Browse Games
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
