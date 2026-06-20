'use server';
/**
 * @fileOverview A Genkit flow for the AI Palate Concierge, providing personalized coffee and food pairing recommendations.
 *
 * - aiPalateConciergeRecommendation - A function that handles the AI Palate Concierge recommendation process.
 * - AiPalateConciergeRecommendationInput - The input type for the aiPalateConciergeRecommendation function.
 * - AiPalateConciergeRecommendationOutput - The return type for the aiPalateConciergeRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPalateConciergeRecommendationInputSchema = z.object({
  flavorPreferences: z
    .string()
    .describe(
      'A description of the user’s flavor preferences (e.g., "fruity, bright, sweet", "bold, chocolatey, nutty").'
    ),
  mood:
    z
      .string()
      .describe('The user’s current mood (e.g., "relaxed, cozy", "energetic, adventurous").'),
});
export type AiPalateConciergeRecommendationInput = z.infer<
  typeof AiPalateConciergeRecommendationInputSchema
>;

const AiPalateConciergeRecommendationOutputSchema = z.object({
  coffeeRecommendation: z.string().describe('The recommended coffee or coffee-based drink.'),
  foodRecommendation: z.string().describe('The recommended food pairing.'),
  reasoning:
    z
      .string()
      .describe('A brief explanation of why this pairing was recommended based on the user’s preferences and mood.'),
});
export type AiPalateConciergeRecommendationOutput = z.infer<
  typeof AiPalateConciergeRecommendationOutputSchema
>;

export async function aiPalateConciergeRecommendation(
  input: AiPalateConciergeRecommendationInput
): Promise<AiPalateConciergeRecommendationOutput> {
  return aiPalateConciergeRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPalateConciergeRecommendationPrompt',
  input: {schema: AiPalateConciergeRecommendationInputSchema},
  output: {schema: AiPalateConciergeRecommendationOutputSchema},
  prompt: `You are an expert coffee sommelier and food pairing specialist for CURIO, a premium specialty coffee shop.
Your goal is to provide personalized coffee and food pairing recommendations based on the user's specific flavor preferences and current mood.
Consider the following:

User's Flavor Preferences: {{{flavorPreferences}}}
User's Current Mood: {{{mood}}}

Based on these details, recommend a coffee drink and a food item from CURIO's menu that perfectly complement each other and the user's taste and mood.
Provide a brief, sophisticated reasoning for your recommendation.

CURIO's Menu items for inspiration:
Hot Coffee: Espresso, Americano, Macchiato, Cortado, Cappuccino, Flat White, Latte, Spanish Latte, Salted Caramel, Mocha, Turkish Coffee, French Coffee
Iced Coffee: Americano, Latte, Spanish, Salted Caramel, Pistachio, Honey Spice, Caramel Macchiato
Karak: Original, Spice, Saffron, Dates, Cardamom, Ginger
Filter Coffee: V60, AeroPress
Matcha: Classic, Spanish Matcha, Strawberry Matcha, Coconut Matcha, Vanilla Matcha, Pineapple Matcha
Blended: Classic, Spanish, Salted Caramel, Caramel, Mocha, Date Latte, Pistachio
Hot Chocolate: Classic, Marshmallow, Hazelnut Creamy, Pistachio Creamy, Cookies Creamy
Smoothies: Mixed Berry, Blueberry, Orange Cherry, Sour Coconut, Mango Passion, Mango Kiwi
Refreshers: Mojitos, Hibiscus, Mixed Bubbles
Parathah (Food): Cold Cuts, Cheese Lava, Turkey & Cheddar, Pastirma Volcano, Bikini Hotdog, Pistachio Dream, Nutella Hug, Kiri Honey

Example Output:
{
  "coffeeRecommendation": "Iced Spanish Latte",
  "foodRecommendation": "Pistachio Dream",
  "reasoning": "The rich, sweet notes of the Spanish Latte perfectly complement the delicate pistachio flavor and creamy texture of the Pistachio Dream, creating a luxurious and comforting experience for a relaxed mood."
}
`,
});

const aiPalateConciergeRecommendationFlow = ai.defineFlow(
  {
    name: 'aiPalateConciergeRecommendationFlow',
    inputSchema: AiPalateConciergeRecommendationInputSchema,
    outputSchema: AiPalateConciergeRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
