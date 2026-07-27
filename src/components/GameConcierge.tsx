"use client";

import { useRef, useState } from "react";
import { Sparkles, Dices, Coffee, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  aiGameConciergeRecommendation,
  AiGameConciergeRecommendationOutput,
} from "@/ai/flows/ai-game-concierge-recommendation";
import { useToast } from "@/hooks/use-toast";
import { gsap, useGSAP } from "@/lib/gsap";

export default function GameConcierge() {
  const [groupSize, setGroupSize] = useState("");
  const [groupVibe, setGroupVibe] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AiGameConciergeRecommendationOutput | null>(null);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".concierge-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      if (recommendation && resultRef.current) {
        gsap.fromTo(
          resultRef.current,
          { opacity: 0, y: 16, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
        );
        gsap.from(".concierge-result-item", {
          opacity: 0,
          y: 10,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.15,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [recommendation], scope: sectionRef }
  );

  const handleGetRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupSize || !groupVibe) {
      toast({
        title: "Tell us more",
        description: "Add your group size and vibe so we can pick the right game.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setRecommendation(null);

    try {
      const result = await aiGameConciergeRecommendation({ groupSize, groupVibe });
      setRecommendation(result);
    } catch (error: any) {
      console.error("AI Error:", error);
      toast({
        title: "Concierge Error",
        description: error.message || "Something went wrong while picking your game.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="bg-secondary/20 px-6 py-20">
      <div className="concierge-reveal mb-6 inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent/10 px-4 py-2 text-xs font-medium text-accent">
        <Sparkles className="h-3.5 w-3.5" />
        Game Night Concierge
      </div>
      <h2 className="concierge-reveal mb-4 text-3xl font-headline font-bold leading-tight">
        Not sure what to play?
      </h2>
      <p className="concierge-reveal mb-8 text-sm leading-relaxed text-muted-foreground">
        Tell us who&apos;s playing and the vibe you&apos;re going for — we&apos;ll
        match you with a game and a drink.
      </p>

      <Card className="concierge-reveal border-2 border-black bg-background p-6 shadow-xl">
        <form onSubmit={handleGetRecommendation} className="mb-8 flex flex-col gap-5">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Who&apos;s playing?
            </label>
            <Input
              placeholder="e.g. 4 friends, a couple, family..."
              className="h-12 rounded-xl border-none bg-secondary/50 px-5 focus-visible:ring-accent"
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              What&apos;s the vibe?
            </label>
            <Input
              placeholder="e.g. competitive, chill, first date..."
              className="h-12 rounded-xl border-none bg-secondary/50 px-5 focus-visible:ring-accent"
              value={groupVibe}
              onChange={(e) => setGroupVibe(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="btn-arcade h-14 rounded-2xl bg-primary font-headline text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Rolling the dice...
              </>
            ) : (
              "Find My Match"
            )}
          </Button>
        </form>

        {recommendation && (
          <div ref={resultRef} className="border-t border-border pt-8">
            <div className="mb-6 flex flex-col gap-4">
              <div className="concierge-result-item flex gap-4 rounded-2xl border-2 border-black bg-secondary/30 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-primary">
                  <Dices className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="mb-1 font-headline text-base">The Game</h4>
                  <p className="font-medium text-primary">{recommendation.gameRecommendation}</p>
                </div>
              </div>
              <div className="concierge-result-item flex gap-4 rounded-2xl border-2 border-black bg-secondary/30 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-accent">
                  <Coffee className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="mb-1 font-headline text-base">The Drink</h4>
                  <p className="font-medium text-accent">{recommendation.drinkRecommendation}</p>
                </div>
              </div>
            </div>
            <div className="concierge-result-item rounded-2xl bg-accent/5 p-5 text-center">
              <p className="italic leading-relaxed text-muted-foreground">
                &ldquo;{recommendation.reasoning}&rdquo;
              </p>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}
