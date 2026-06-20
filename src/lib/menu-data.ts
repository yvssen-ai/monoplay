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
  { id: 'h1', name: 'Espresso', description: 'Concentrated coffee brewed by forcing a small amount of nearly boiling water under pressure through finely-ground coffee beans.', price: '12', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-espresso/600/400' },
  { id: 'h2', name: 'Americano', description: 'Espresso diluted with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.', price: '16', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-americano/600/400' },
  { id: 'h7', name: 'Spanish Latte', description: 'A smooth espresso base with sweet condensed milk, providing a rich, creamy finish.', price: '24', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-span-latte/600/400', isSignature: true },
  { id: 'h9', name: 'Salted Caramel Latte', description: 'A delicate balance of sweet caramel and a hint of sea salt mixed with premium espresso.', price: '26', category: 'Hot Coffee', image: 'https://picsum.photos/seed/curio-salted-latte/600/400', isSignature: true },
  
  // ICED COFFEE
  { id: 'i3', name: 'Iced Spanish Latte', description: 'Chilled espresso and milk sweetened with condensed milk over ice.', price: '26', category: 'Iced Coffee', image: 'https://picsum.photos/seed/curio-iced-span/600/400' },
  { id: 'i5', name: 'Pistachio Latte', description: 'Premium pistachio notes combined with our specialty espresso and cold milk.', price: '28', category: 'Iced Coffee', image: 'https://picsum.photos/seed/curio-pista/600/400', isSignature: true },
  { id: 'i6', name: 'Honey Spice Coffee', description: 'A unique blend of natural honey and subtle aromatic spices over ice.', price: '28', category: 'Iced Coffee', image: 'https://picsum.photos/seed/curio-honey/600/400', isSignature: true },

  // KARAK
  { id: 'k1', name: 'Original Karak', description: 'Authentic traditional tea boiled with aromatic spices and premium milk.', price: '12', category: 'Signature Karak', image: 'https://picsum.photos/seed/curio-karak/600/400', isSignature: true },
  { id: 'k3', name: 'Saffron Karak', description: 'Traditional Karak tea infused with premium saffron threads for a luxurious aroma.', price: '15', category: 'Signature Karak', image: 'https://picsum.photos/seed/curio-saffron/600/400' },

  // MATCHA
  { id: 'm1', name: 'Classic Matcha', description: 'Pure, ceremonial-grade Japanese green tea whisked to perfection.', price: '24', category: 'Matcha', image: 'https://picsum.photos/seed/curio-matcha/600/400' },
  { id: 'm3', name: 'Strawberry Matcha', description: 'Fresh strawberry purée layered with ceremonial matcha and cold milk.', price: '28', category: 'Matcha', image: 'https://picsum.photos/seed/curio-straw-matcha/600/400', isSignature: true },

  // FOOD
  { id: 'f1', name: 'Pistachio Dream', description: 'A decadent pastry filled with premium pistachio cream.', price: '22', category: 'Food', image: 'https://picsum.photos/seed/curio-pista-pastry/600/400' },
  { id: 'f2', name: 'Turkey & Cheddar', description: 'A classic pairing of sliced turkey breast and sharp cheddar in a warm croissant.', price: '18', category: 'Food', image: 'https://picsum.photos/seed/curio-turkey/600/400' },
  { id: 'f3', name: 'Nutella Hug', description: 'Soft brioche filled with rich Nutella chocolate, served warm.', price: '20', category: 'Food', image: 'https://picsum.photos/seed/curio-nutella/600/400' },
];