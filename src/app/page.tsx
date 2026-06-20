import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import SignatureDrinks from "@/components/SignatureDrinks";
import MenuSection from "@/components/MenuSection";
import AIPalateConcierge from "@/components/AIPalateConcierge";
import CoffeeExperience from "@/components/CoffeeExperience";
import Gallery from "@/components/Gallery";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-background selection:bg-accent/30 overflow-x-hidden">
      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      
      <Hero />
      <Marquee />
      <About />
      <SignatureDrinks />
      <MenuSection />
      <AIPalateConcierge />
      <CoffeeExperience />
      <Gallery />
      <VisitUs />
      
      <section className="py-32 px-8 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-16 md:p-24 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl md:text-6xl font-headline text-white mb-8 relative z-10">Ready for your <br /> next cup?</h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="rounded-full px-12 py-5 bg-white text-primary font-bold hover:bg-accent hover:text-white transition-all text-lg">
              Visit Today
            </button>
            <button className="rounded-full px-12 py-5 border border-white/20 text-white font-bold hover:bg-white/10 transition-all text-lg">
              View Menu
            </button>
          </div>
          <p className="mt-12 text-white/50 text-sm tracking-widest uppercase relative z-10">Stay Curious.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}