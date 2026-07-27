"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FeaturedGames from "@/components/FeaturedGames";
import Gallery from "@/components/Gallery";
import MenuSection from "@/components/MenuSection";
import GameConcierge from "@/components/GameConcierge";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background selection:bg-accent/30">
      <LoadingScreen />

      <Navbar />
      <Hero />
      <Marquee />

      <About />
      <FeaturedGames />
      <Gallery />
      <MenuSection />
      <GameConcierge />

      <VisitUs />

      <section className="px-6 py-16 text-center">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-10 shadow-xl">
          <h2 className="mb-6 text-3xl font-headline font-bold text-primary-foreground">
            Ready for game night?
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="#visit"
              className="rounded-full bg-white px-8 py-4 font-bold text-primary transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Reserve a Table
            </a>
            <a
              href="#games"
              className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
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
