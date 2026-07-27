"use client";

import { useRef, useState } from "react";
import { Search, Star } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menu-data";
import { gsap, useGSAP } from "@/lib/gsap";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Hot Coffee");
  const [searchQuery, setSearchQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = searchQuery ? true : item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useGSAP(
    () => {
      if (!listRef.current) return;
      gsap.fromTo(
        ".menu-item",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }
      );
    },
    { dependencies: [activeCategory, searchQuery], scope: listRef }
  );

  return (
    <section id="menu" className="px-6 py-20">
      <div className="mb-2">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Fuel Up
        </span>
        <h2 className="text-3xl font-headline font-bold leading-tight">
          Cafe <span className="text-primary">Menu</span>
        </h2>
      </div>
      <p className="mb-8 text-sm text-muted-foreground">
        Coffee, tea &amp; snacks to keep your table going all night.
      </p>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search the menu..."
          className="h-12 rounded-xl border-none bg-secondary/50 pl-12 focus-visible:ring-accent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="no-scrollbar mb-6 overflow-x-auto">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="h-auto flex-nowrap gap-2 bg-transparent p-0">
            {MENU_CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="whitespace-nowrap rounded-full bg-secondary/60 px-4 py-2 text-xs font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div ref={listRef} className="flex flex-col gap-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="menu-item flex items-center justify-between rounded-2xl bg-secondary/20 px-5 py-4"
          >
            <div className="flex flex-col">
              <span className="font-headline text-base">{item.name}</span>
              {item.isSignature && (
                <span className="mt-0.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                  <Star className="h-2.5 w-2.5 fill-accent" /> Signature
                </span>
              )}
            </div>
            <span className="font-medium text-accent">{item.price} EGP</span>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="rounded-2xl bg-secondary/10 py-16 text-center">
            <p className="text-muted-foreground">No items found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
