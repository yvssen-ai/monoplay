"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menu-data";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Hot Coffee");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = searchQuery ? true : item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 px-8 lg:px-20 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-headline mb-4">Explore <span className="text-accent">The Menu</span></h2>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              className="pl-12 h-12 rounded-xl bg-secondary/30 border-none focus-visible:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="bg-transparent h-auto p-0 gap-2 flex-nowrap">
              {MENU_CATEGORIES.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:bg-secondary/50 transition-all text-xs font-medium whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Card className="border-none bg-secondary/10 rounded-2xl hover:bg-secondary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-headline">{item.name}</h3>
                        {item.isSignature && (
                          <span className="text-[10px] text-accent font-bold uppercase tracking-widest">
                            Signature
                          </span>
                        )}
                      </div>
                      <span className="text-lg font-medium text-accent">{item.price} EGP</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-secondary/5 rounded-2xl">
            <p className="text-muted-foreground">No items found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
