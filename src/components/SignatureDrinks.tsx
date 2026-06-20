"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "@/lib/menu-data";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function SignatureDrinks() {
  const signatures = MENU_ITEMS.filter(item => item.isSignature);
  const [isOpen, setIsOpen] = useState(false);

  // Show only 3 items initially
  const initialSignatures = signatures.slice(0, 3);
  const remainingSignatures = signatures.slice(3);

  return (
    <section className="py-12 px-8 lg:px-20 bg-secondary/20">
      <div className="max-w-2xl mx-auto">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full space-y-6"
        >
          <div className="flex items-center justify-between border-b border-accent/10 pb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-accent fill-accent" />
              </motion.div>
              <h2 className="text-xl font-headline font-bold tracking-widest uppercase">Signatures</h2>
            </div>
            
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full gap-2 text-accent hover:bg-accent/10 transition-all font-medium"
              >
                {isOpen ? "Show Less" : "Explore All"}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </Button>
            </CollapsibleTrigger>
          </div>

          <div className="space-y-1">
            {/* Initial List */}
            {initialSignatures.map((drink, i) => (
              <motion.div
                key={drink.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex justify-between items-center py-4 px-2 hover:bg-background/50 rounded-lg transition-all group"
              >
                <span className="text-lg font-headline group-hover:text-accent group-hover:pl-2 transition-all duration-300">
                  {drink.name}
                </span>
                <span className="font-medium text-accent/80 group-hover:text-accent transition-colors">
                  {drink.price} EGP
                </span>
              </motion.div>
            ))}

            {/* Collapsible Content */}
            <CollapsibleContent className="space-y-1 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              {remainingSignatures.map((drink, i) => (
                <motion.div
                  key={drink.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex justify-between items-center py-4 px-2 hover:bg-background/50 rounded-lg transition-all group"
                >
                  <span className="text-lg font-headline group-hover:text-accent group-hover:pl-2 transition-all duration-300">
                    {drink.name}
                  </span>
                  <span className="font-medium text-accent/80 group-hover:text-accent transition-colors">
                    {drink.price} EGP
                  </span>
                </motion.div>
              ))}
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}
