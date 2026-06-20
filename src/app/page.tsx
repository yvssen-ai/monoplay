import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SignatureDrinks from "@/components/SignatureDrinks";
import MenuSection from "@/components/MenuSection";
import AIPalateConcierge from "@/components/AIPalateConcierge";
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
      
      <SignatureDrinks />
      <MenuSection />
      <AIPalateConcierge />
      <VisitUs />
      
      <section className="py-24 px-8 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto bg-primary rounded-[2rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-headline text-white mb-8">Ready for your next cup?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full px-10 py-4 bg-white text-primary font-bold hover:bg-accent hover:text-white transition-all">
              Visit Today
            </button>
            <button className="rounded-full px-10 py-4 border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
              View Menu
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
