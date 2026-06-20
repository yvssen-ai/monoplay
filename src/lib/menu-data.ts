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
  "Parathah",
  "Additions"
];

export const MENU_ITEMS: MenuItem[] = [
  // HOT COFFEE
  { id: 'hc1', name: 'Espresso', description: 'Pure concentrated essence of our signature blend.', price: '75', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc1/600/400' },
  { id: 'hc2', name: 'Americano', description: 'Smooth espresso lengthened with hot water.', price: '80', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc2/600/400' },
  { id: 'hc3', name: 'Macchiato', description: 'Espresso marked with a dollop of frothy milk.', price: '75', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc3/600/400' },
  { id: 'hc4', name: 'Cortado', description: 'Equal parts espresso and warm milk for a balanced bite.', price: '85', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc4/600/400', isSignature: true },
  { id: 'hc5', name: 'Cappuccino', description: 'Classic balance of espresso, steamed milk, and foam.', price: '90', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc5/600/400' },
  { id: 'hc6', name: 'Flat White', description: 'Velvety micro-foam over a double shot of espresso.', price: '90', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc6/600/400' },
  { id: 'hc7', name: 'Latte', description: 'Creamy espresso drink with light foam.', price: '95', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc7/600/400' },
  { id: 'hc8', name: 'Spanish Latte', description: 'Sweet and creamy signature latte.', price: '105', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc8/600/400', isSignature: true },
  { id: 'hc9', name: 'Salted Caramel', description: 'Rich espresso with a sweet and salty finish.', price: '105', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc9/600/400' },
  { id: 'hc10', name: 'Macchiato Caramel', description: 'Espresso with layered caramel and milk.', price: '105', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc10/600/400' },
  { id: 'hc11', name: 'Mocha (White-Dark)', description: 'Espresso combined with premium chocolate and steamed milk.', price: '105', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc11/600/400' },
  { id: 'hc12', name: 'Turkish Coffee', description: 'Traditional finely ground coffee brewed with heritage.', price: '65', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc12/600/400' },
  { id: 'hc13', name: 'French Coffee', description: 'Smooth coffee available in Classic or Hazelnut.', price: '70', category: 'Hot Coffee', image: 'https://picsum.photos/seed/hc13/600/400' },

  // ICE COFFEE
  { id: 'ic1', name: 'Iced Americano', description: 'Chilled espresso lengthened with cold water.', price: '95', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic1/600/400' },
  { id: 'ic2', name: 'Iced Latte', description: 'Chilled espresso with cold milk over ice.', price: '100', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic2/600/400' },
  { id: 'ic3', name: 'Iced Spanish', description: 'Our signature sweet chilled latte.', price: '110', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic3/600/400', isSignature: true },
  { id: 'ic4', name: 'Iced Salted Caramel', description: 'Sweet and salty chilled espresso treat.', price: '110', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic4/600/400' },
  { id: 'ic5', name: 'Iced Pistachio', description: 'Luxurious roasted pistachio notes in a chilled latte.', price: '130', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic5/600/400', isSignature: true },
  { id: 'ic6', name: 'Iced Mocha (White-Dark)', description: 'Chilled chocolate and espresso fusion.', price: '115', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic6/600/400' },
  { id: 'ic7', name: 'Iced Honey Spice', description: 'Aromatic honey and spice chilled coffee.', price: '110', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic7/600/400', isSignature: true },
  { id: 'ic8', name: 'Iced Caramel Macchiato', description: 'Layered caramel and chilled espresso.', price: '115', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic8/600/400' },
  { id: 'ic9', name: 'Iced Caramel Latte', description: 'Smooth caramel chilled latte.', price: '115', category: 'Iced Coffee', image: 'https://picsum.photos/seed/ic9/600/400' },

  // SIGNATURE KARAK
  { id: 'sk1', name: 'Original Tea', description: 'Our house-steeped traditional tea blend.', price: '35', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk1/600/400' },
  { id: 'sk2', name: 'Original Karak', description: 'Creamy, spiced tea slow-boiled to perfection.', price: '65', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk2/600/400', isSignature: true },
  { id: 'sk3', name: 'Spice Karak', description: 'Karak with an extra kick of aromatic spices.', price: '70', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk3/600/400' },
  { id: 'sk4', name: 'Saffron Karak', description: 'Luxury saffron threads infused in our signature Karak.', price: '120', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk4/600/400', isSignature: true },
  { id: 'sk5', name: 'Dates Karak', description: 'Karak tea with a natural sweetness of desert dates.', price: '70', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk5/600/400' },
  { id: 'sk6', name: 'Cardamom Karak', description: 'Traditional Karak with heavy green cardamom notes.', price: '70', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk6/600/400' },
  { id: 'sk7', name: 'Ginger Karak', description: 'Warm and zesty ginger-infused Karak tea.', price: '70', category: 'Signature Karak', image: 'https://picsum.photos/seed/sk7/600/400' },

  // FILTER COFFEE
  { id: 'fc1', name: 'V60', description: 'Hand-poured precision brew (Hot or Ice).', price: '130', category: 'Filter Coffee', image: 'https://picsum.photos/seed/fc1/600/400', isSignature: true },
  { id: 'fc2', name: 'Aeropress', description: 'Full-bodied coffee brewed with pressure.', price: '130', category: 'Filter Coffee', image: 'https://picsum.photos/seed/fc2/600/400' },

  // MATCHA
  { id: 'm1', name: 'Classic Matcha', description: 'Traditional Japanese green tea (Ice).', price: '115', category: 'Matcha', image: 'https://picsum.photos/seed/m1/600/400' },
  { id: 'm2', name: 'Spanish Matcha', description: 'Sweetened matcha experience, coffee or non-coffee.', price: '120', category: 'Matcha', image: 'https://picsum.photos/seed/m2/600/400', isSignature: true },
  { id: 'm3', name: 'Strawberry Matcha', description: 'Artisanal strawberry purée layered with matcha.', price: '120', category: 'Matcha', image: 'https://picsum.photos/seed/m3/600/400', isSignature: true },
  { id: 'm4', name: 'Coconut Matcha', description: 'Tropical coconut milk paired with premium matcha.', price: '120', category: 'Matcha', image: 'https://picsum.photos/seed/m4/600/400' },
  { id: 'm5', name: 'Spice Matcha', description: 'Earthy matcha with a unique spice blend.', price: '120', category: 'Matcha', image: 'https://picsum.photos/seed/m5/600/400' },
  { id: 'm6', name: 'Vanilla Matcha', description: 'Matcha smoothed over with sweet vanilla.', price: '120', category: 'Matcha', image: 'https://picsum.photos/seed/m6/600/400' },
  { id: 'm7', name: 'Pineapple Matcha', description: 'Refreshingly zesty pineapple and matcha fusion.', price: '120', category: 'Matcha', image: 'https://picsum.photos/seed/m7/600/400' },

  // BLENDED COFFEE
  { id: 'bc1', name: 'Classic Blended', description: 'Smooth blended coffee experience.', price: '110', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc1/600/400' },
  { id: 'bc2', name: 'Spanish Blended', description: 'Our signature sweet latte in blended form.', price: '115', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc2/600/400' },
  { id: 'bc3', name: 'Salted Caramel Blended', description: 'Sweet and salty blended treat.', price: '115', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc3/600/400' },
  { id: 'bc4', name: 'Caramel Blended', description: 'Rich caramel blended coffee.', price: '115', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc4/600/400' },
  { id: 'bc5', name: 'Mocha Blended', description: 'Chocolate and coffee blended perfection.', price: '120', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc5/600/400' },
  { id: 'bc6', name: 'Date Latte Blended', description: 'Traditional date flavor in a blended latte.', price: '120', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc6/600/400' },
  { id: 'bc7', name: 'Pistachio Blended', description: 'Premium pistachio blended coffee.', price: '135', category: 'Blended Coffee', image: 'https://picsum.photos/seed/bc7/600/400', isSignature: true },

  // HOT CHOCOLATE
  { id: 'hch1', name: 'Classic Hot Chocolate', description: 'Pure Belgian-style melted chocolate.', price: '100', category: 'Hot Chocolate', image: 'https://picsum.photos/seed/hch1/600/400' },
  { id: 'hch2', name: 'Marshmallow Hot Chocolate', description: 'Topped with toasted artisan marshmallows.', price: '105', category: 'Hot Chocolate', image: 'https://picsum.photos/seed/hch2/600/400' },
  { id: 'hch3', name: 'Hazelnut Creamy', description: 'Rich chocolate with roasted hazelnut cream.', price: '105', category: 'Hot Chocolate', image: 'https://picsum.photos/seed/hch3/600/400' },
  { id: 'hch4', name: 'Pistachio Creamy', description: 'Signature chocolate with pistachio infusion.', price: '120', category: 'Hot Chocolate', image: 'https://picsum.photos/seed/hch4/600/400' },
  { id: 'hch5', name: 'Cookies Creamy', description: 'White chocolate with cookie crumbles.', price: '110', category: 'Hot Chocolate', image: 'https://picsum.photos/seed/hch5/600/400' },

  // SMOOTHIES
  { id: 's1', name: 'Mixed Berry Smoothie', description: 'Vibrant blend of seasonal berries.', price: '110', category: 'Smoothies', image: 'https://picsum.photos/seed/s1/600/400' },
  { id: 's2', name: 'Blueberry Smoothie', description: 'Rich and antioxidant-packed blueberry blend.', price: '110', category: 'Smoothies', image: 'https://picsum.photos/seed/s2/600/400' },
  { id: 's3', name: 'Orange Cherry Smoothie', description: 'Unique citrus and cherry fusion.', price: '100', category: 'Smoothies', image: 'https://picsum.photos/seed/s3/600/400' },
  { id: 's4', name: 'Sour Coconut Smoothie', description: 'Refreshingly tart coconut blend.', price: '100', category: 'Smoothies', image: 'https://picsum.photos/seed/s4/600/400' },
  { id: 's5', name: 'Mango Passion Smoothie', description: 'Tropical mango and passion fruit blend.', price: '110', category: 'Smoothies', image: 'https://picsum.photos/seed/s5/600/400' },
  { id: 's6', name: 'Mango Kiwi Smoothie', description: 'Zesty kiwi and sweet mango fusion.', price: '105', category: 'Smoothies', image: 'https://picsum.photos/seed/s6/600/400' },
  { id: 's7', name: 'Pure Mango Smoothie', description: 'Sweet and luscious pure mango.', price: '100', category: 'Smoothies', image: 'https://picsum.photos/seed/s7/600/400' },
  { id: 's8', name: 'Strawberry Smoothie', description: 'Classic sweet strawberry blend.', price: '100', category: 'Smoothies', image: 'https://picsum.photos/seed/s8/600/400' },

  // REFRESHERS
  { id: 'r1', name: 'Mojito Soda/Redbull', description: 'Classic, Passion, Strawberry, Kiwi, and more.', price: '85', category: 'Refreshers', image: 'https://picsum.photos/seed/r1/600/400' },
  { id: 'r2', name: 'Hibiscus Refresher', description: 'Classic, Coconut, Taif Flowers, and more.', price: '80', category: 'Refreshers', image: 'https://picsum.photos/seed/r2/600/400' },
  { id: 'r3', name: 'Mix Bubbles', description: 'Strawberry, Mango, Blueberry, or Passion.', price: '95', category: 'Refreshers', image: 'https://picsum.photos/seed/r3/600/400' },

  // PARATHAH (FOOD)
  { id: 'p1', name: 'Cold Cuts Parathah', description: 'Premium selection of cold cuts in warm parathah.', price: '100', category: 'Parathah', image: 'https://picsum.photos/seed/p1/600/400' },
  { id: 'p2', name: 'Cheese Lava', description: 'Warm parathah with a molten three-cheese center.', price: '75', category: 'Parathah', image: 'https://picsum.photos/seed/p2/600/400', isSignature: true },
  { id: 'p3', name: 'Turkey & Cheddar', description: 'Smoked turkey and sharp cheddar parathah.', price: '75', category: 'Parathah', image: 'https://picsum.photos/seed/p3/600/400' },
  { id: 'p4', name: 'Pastirma Volcano', description: 'Savory pastirma and cheese eruption.', price: '85', category: 'Parathah', image: 'https://picsum.photos/seed/p4/600/400', isSignature: true },
  { id: 'p5', name: 'Bikini Hotdog', description: 'Signature hotdog parathah with classic toppings.', price: '80', category: 'Parathah', image: 'https://picsum.photos/seed/p5/600/400' },
  { id: 'p6', name: 'Pistachio Dream', description: 'Sweet parathah with premium pistachio cream.', price: '100', category: 'Parathah', image: 'https://picsum.photos/seed/p6/600/400', isSignature: true },
  { id: 'p7', name: 'Nutella Hug', description: 'Warm parathah wrapped around rich Nutella.', price: '80', category: 'Parathah', image: 'https://picsum.photos/seed/p7/600/400' },
  { id: 'p8', name: 'Kiri Honey', description: 'Creamy Kiri cheese and natural mountain honey.', price: '75', category: 'Parathah', image: 'https://picsum.photos/seed/p8/600/400' },

  // ADDITIONS
  { id: 'a1', name: 'Flavours', description: 'Add your choice of signature flavors.', price: '25', category: 'Additions', image: 'https://picsum.photos/seed/a1/600/400' },
  { id: 'a2', name: 'Sauces', description: 'Extra premium sauces to drizzle.', price: '25', category: 'Additions', image: 'https://picsum.photos/seed/a2/600/400' },
  { id: 'a3', name: 'Ice Cream Scoop', description: 'Add a creamy scoop of vanilla ice cream.', price: '25', category: 'Additions', image: 'https://picsum.photos/seed/a3/600/400' },
  { id: 'a4', name: 'Alt Milk', description: 'Oat, Coconut, or Almond milk swap.', price: '30', category: 'Additions', image: 'https://picsum.photos/seed/a4/600/400' },
  { id: 'a5', name: 'Coffee Shot', description: 'Add an extra shot of our signature espresso.', price: '30', category: 'Additions', image: 'https://picsum.photos/seed/a5/600/400' },
  { id: 'a6', name: 'Fruity Bubbles', description: 'Bursting fruity bubbles for your drink.', price: '30', category: 'Additions', image: 'https://picsum.photos/seed/a6/600/400' },
];
