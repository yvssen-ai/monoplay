"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Coffee, Utensils, Loader2 } from "lucide-react";
import { aiPalateConciergeRecommendation, AiPalateConciergeRecommendationOutput } from "@/ai/flows/ai-palate-concierge-recommendation";

export default function AIPalateConcierge() {
  const [flavor, setFlavor] = useState("");
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AiPalateConciergeRecommendationOutput | null>(null);

  const handleGetRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flavor || !mood) return;

    setLoading(true);
    try {
      const result = await aiPalateConciergeRecommendation({
        flavorPreferences: flavor,
        mood: mood,
      });
      setRecommendation(result);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-8 lg:px-20 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Curio AI Concierge</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-headline mb-6">Discover Your Perfect Pairing</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tell us about your palate and how you're feeling. Our AI sommelier will curate a personalized 
          experience just for you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-none shadow-xl bg-background p-8 md:p-12 rounded-[2.5rem]">
          <form onSubmit={handleGetRecommendation} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">What do you crave?</label>
              <Input 
                placeholder="e.g. Fruity, bold, nutty..." 
                className="bg-secondary/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-accent"
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Current mood?</label>
              <Input 
                placeholder="e.g. Relaxed, focused, adventurous..." 
                className="bg-secondary/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-accent"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                disabled={loading}
                className="rounded-full px-12 py-7 h-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-lg font-medium"
              >
                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Curate My Palate"}
              </Button>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {recommendation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="pt-12 border-t"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 rounded-3xl bg-secondary/20 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Coffee className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline text-xl mb-2">The Brew</h4>
                      <p className="text-accent font-medium text-lg">{recommendation.coffeeRecommendation}</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-3xl bg-secondary/20 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Utensils className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-headline text-xl mb-2">The Bite</h4>
                      <p className="text-accent font-medium text-lg">{recommendation.foodRecommendation}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-accent/5 p-8 rounded-3xl">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{recommendation.reasoning}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}