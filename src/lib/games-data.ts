export interface GameItem {
  id: string;
  name: string;
  tagline: string;
  players: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  image: string;
  isSignature?: boolean;
}

export const GAME_CATEGORIES = [
  "Party",
  "Strategy",
  "Card",
  "Classic",
  "Cooperative",
  "Deduction",
];

export const GAME_ITEMS: GameItem[] = [
  { id: 'g1', name: 'Catan', tagline: 'Trade, build, and settle the island first.', players: '3-4', duration: '60-90 min', difficulty: 'Medium', category: 'Strategy', image: 'https://picsum.photos/seed/monoplay-catan/600/400', isSignature: true },
  { id: 'g2', name: 'Codenames', tagline: 'Give one-word clues to find your team\'s agents.', players: '4-8', duration: '15-30 min', difficulty: 'Easy', category: 'Party', image: 'https://picsum.photos/seed/monoplay-codenames/600/400', isSignature: true },
  { id: 'g3', name: 'Exploding Kittens', tagline: 'Draw cards, avoid the kitten, don\'t explode.', players: '2-5', duration: '15 min', difficulty: 'Easy', category: 'Card', image: 'https://picsum.photos/seed/monoplay-kittens/600/400', isSignature: true },
  { id: 'g4', name: 'Werewolf', tagline: 'Villagers vs. werewolves — trust no one.', players: '6-18', duration: '30-45 min', difficulty: 'Easy', category: 'Deduction', image: 'https://picsum.photos/seed/monoplay-werewolf/600/400', isSignature: true },
  { id: 'g5', name: 'Ticket to Ride', tagline: 'Race to connect cities across the map.', players: '2-5', duration: '45-60 min', difficulty: 'Medium', category: 'Strategy', image: 'https://picsum.photos/seed/monoplay-ticket/600/400' },
  { id: 'g6', name: 'Dixit', tagline: 'Storytelling with the dreamiest illustrated cards.', players: '3-6', duration: '30 min', difficulty: 'Easy', category: 'Party', image: 'https://picsum.photos/seed/monoplay-dixit/600/400' },
  { id: 'g7', name: 'Splendor', tagline: 'Build a gem-trading empire, one card at a time.', players: '2-4', duration: '30 min', difficulty: 'Medium', category: 'Strategy', image: 'https://picsum.photos/seed/monoplay-splendor/600/400' },
  { id: 'g8', name: 'Bang!', tagline: 'Wild-west duel of outlaws, sheriffs and spies.', players: '4-7', duration: '30-45 min', difficulty: 'Medium', category: 'Deduction', image: 'https://picsum.photos/seed/monoplay-bang/600/400' },
  { id: 'g9', name: 'Jenga', tagline: 'Pull, stack, and pray it doesn\'t topple.', players: '2-8', duration: '15 min', difficulty: 'Easy', category: 'Classic', image: 'https://picsum.photos/seed/monoplay-jenga/600/400' },
  { id: 'g10', name: 'Uno', tagline: 'The classic card duel — always a house favorite.', players: '2-10', duration: '15-20 min', difficulty: 'Easy', category: 'Card', image: 'https://picsum.photos/seed/monoplay-uno/600/400' },
  { id: 'g11', name: 'Pandemic', tagline: 'Team up to stop four outbreaks going global.', players: '2-4', duration: '45 min', difficulty: 'Hard', category: 'Cooperative', image: 'https://picsum.photos/seed/monoplay-pandemic/600/400' },
  { id: 'g12', name: 'Chess', tagline: 'The timeless battle of kings and pawns.', players: '2', duration: '20-60 min', difficulty: 'Hard', category: 'Classic', image: 'https://picsum.photos/seed/monoplay-chess/600/400' },
];
