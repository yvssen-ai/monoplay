export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isSignature?: boolean;
}

export const MENU_CATEGORIES = [
  "Hot Coffee",
  "Iced Coffee",
  "Signature Karak",
  "Filter Coffee",
  "Matcha",
  "Blended Coffee",
  "Hot Chocolate",
  "Smoothies",
  "Refreshers",
  "Food"
];

export const MENU_ITEMS: MenuItem[] = [
  // HOT COFFEE
  { id: 'h1', name: 'Espresso', description: 'A concentrated shot of our signature house blend, featuring notes of dark chocolate and toasted almond.', price: '12', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-espresso/600/400' },
  { id: 'h2', name: 'Cortado', description: 'Equal parts espresso and warm, silky milk. A balanced experience for the true coffee enthusiast.', price: '18', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-cortado/600/400', isSignature: true },
  { id: 'h3', name: 'Flat White', description: 'Micro-foam poured over a double shot of espresso, creating a smooth and velvety texture.', price: '22', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-flatwhite/600/400' },
  { id: 'h7', name: 'Spanish Latte', description: 'Our most loved signature. A rich espresso base balanced with sweet condensed milk for a creamy finish.', price: '24', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-span-latte/600/400', isSignature: true },
  { id: 'h8', name: 'Turkish Coffee', description: 'Traditional finely ground coffee brewed in a copper cezve, served with a side of dates.', price: '20', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-turkish/600/400' },
  
  // ICED COFFEE
  { id: 'i1', name: 'Iced Spanish Latte', description: 'Chilled espresso and milk sweetened with condensed milk over ice. A CURIO classic.', price: '26', category: 'Iced Coffee', image: 'https://picsum.photos/seed/curio-iced-span/600/400' },
  { id: 'i2', name: 'Pistachio Latte', description: 'Premium roasted pistachio notes combined with our specialty espresso and cold milk.', price: '28', category: 'Iced Coffee', image: 'https://picsum.photos/seed/curio-pista/600/400', isSignature: true },
  { id: 'i3', name: 'Honey Spice Coffee', description: 'A unique, refreshing blend of natural honey and subtle aromatic spices over ice.', price: '28', category: 'Iced Coffee', image: 'https://picsum.photos/seed/curio-honey/600/400', isSignature: true },

  // KARAK
  { id: 'k1', name: 'Original Karak', description: 'Authentic traditional tea slow-boiled with aromatic spices and premium milk.', price: '12', category: 'Signature Karak', image: 'https://picsum.photos/seed/curio-karak/600/400', isSignature: true },
  { id: 'k2', name: 'Saffron Karak', description: 'Traditional Karak tea infused with the worlds finest saffron threads for a luxurious aroma.', price: '15', category: 'Signature Karak', image: 'https://picsum.photos/seed/curio-saffron/600/400', isSignature: true },
  { id: 'k3', name: 'Cardamom Karak', description: 'Rich, spiced tea with heavy notes of green cardamom. Warmth in a cup.', price: '14', category: 'Signature Karak', image: 'https://picsum.photos/seed/curio-cardamom/600/400' },

  // FILTER COFFEE
  { id: 'fi1', name: 'V60 Pour Over', description: 'Precision-brewed filter coffee highlighting the unique terroir of our single-origin beans.', price: '30', category: 'Filter Coffee', image: 'https://picsum.photos/seed/curio-v60/600/400', isSignature: true },
  { id: 'fi2', name: 'AeroPress', description: 'A clean, full-bodied cup brewed with pressure to extract deep flavor profiles.', price: '28', category: 'Filter Coffee', image: 'https://picsum.photos/seed/curio-aero/600/400' },

  // MATCHA
  { id: 'm1', name: 'Ceremonial Matcha', description: 'Pure, ceremonial-grade Japanese green tea from Uji, whisked to a delicate froth.', price: '24', category: 'Matcha', image: 'https://picsum.photos/seed/curio-matcha/600/400' },
  { id: 'm2', name: 'Strawberry Matcha', description: 'Fresh, artisanal strawberry purée layered with ceremonial matcha and cold milk.', price: '28', category: 'Matcha', image: 'https://picsum.photos/seed/curio-straw-matcha/600/400', isSignature: true },
  { id: 'm3', name: 'Coconut Matcha', description: 'Tropical coconut milk paired with the earthy notes of premium matcha.', price: '28', category: 'Matcha', image: 'https://picsum.photos/seed/curio-coco-matcha/600/400' },

  // REFRESHERS
  { id: 'r1', name: 'Hibiscus Refresher', description: 'A vibrant, tart infusion of hibiscus flowers with a hint of citrus.', price: '22', category: 'Refreshers', image: 'https://picsum.photos/seed/curio-hibiscus/600/400' },

  // FOOD
  { id: 'f1', name: 'Pistachio Dream', description: 'A delicate, flaky pastry filled with house-made premium pistachio cream.', price: '22', category: 'Food', image: 'https://picsum.photos/seed/curio-pista-pastry/600/400', isSignature: true },
  { id: 'f2', name: 'Cheese Lava', description: 'A warm, decadent pastry with a molten center of three premium cheeses.', price: '24', category: 'Food', image: 'https://picsum.photos/seed/curio-cheese/600/400' },
  { id: 'f3', name: 'Turkey & Cheddar', description: 'Smoked turkey breast and aged sharp cheddar in a butter-layered croissant.', price: '20', category: 'Food', image: 'https://picsum.photos/seed/curio-turkey/600/400' },
  { id: 'f4', name: 'Pastirma Volcano', description: 'Savory pastirma and cheese in a signature dough, baked to perfection.', price: '26', category: 'Food', image: 'https://picsum.photos/seed/curio-pastirma/600/400', isSignature: true },
];
