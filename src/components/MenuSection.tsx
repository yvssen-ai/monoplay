
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menu-data";
import Image from "next/image";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Hot Coffee");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = searchQuery ? true : item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-32 px-8 lg:px-20 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-headline mb-6">Explore <span className="text-accent">The Menu</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crafted coffee, specialty matcha, handcrafted karak, refreshing drinks, and fresh bites prepared daily.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search coffee, tea..." 
              className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none focus-visible:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="bg-transparent h-auto p-0 gap-2 flex-nowrap">
              {MENU_CATEGORIES.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white border border-transparent data-[state=inactive]:bg-secondary/50 transition-all text-sm font-medium whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group overflow-hidden border-none bg-secondary/20 rounded-[2rem] hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={item.imageHint}
                    />
                    {item.isSignature && (
                      <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        Signature
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-headline">{item.name}</h3>
                      <span className="text-xl font-medium text-accent">{item.price} EGP</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-secondary/10 rounded-[2rem]">
            <p className="text-muted-foreground">No items found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
