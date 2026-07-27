'use server';
/**
 * @fileOverview A Genkit flow for the Monoplay Game Night Concierge, pairing a
 * board game with a drink based on the group's size and vibe.
 *
 * - aiGameConciergeRecommendation - Handles the recommendation process.
 * - AiGameConciergeRecommendationInput - Input type.
 * - AiGameConciergeRecommendationOutput - Output type.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiGameConciergeRecommendationInputSchema = z.object({
  groupSize: z
    .string()
    .describe('How many people are playing (e.g. "2 players", "a group of 6").'),
  groupVibe: z
    .string()
    .describe('The mood or vibe of the group (e.g. "competitive and loud", "chill first date", "family with kids").'),
});
export type AiGameConciergeRecommendationInput = z.infer<
  typeof AiGameConciergeRecommendationInputSchema
>;

const AiGameConciergeRecommendationOutputSchema = z.object({
  gameRecommendation: z.string().describe('The recommended board or card game.'),
  drinkRecommendation: z.string().describe('The recommended drink from the cafe menu.'),
  reasoning: z
    .string()
    .describe('A brief, friendly explanation of why this game and drink pairing fits the group.'),
});
export type AiGameConciergeRecommendationOutput = z.infer<
  typeof AiGameConciergeRecommendationOutputSchema
>;

export async function aiGameConciergeRecommendation(
  input: AiGameConciergeRecommendationInput
): Promise<AiGameConciergeRecommendationOutput> {
  return aiGameConciergeRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGameConciergeRecommendationPrompt',
  input: {schema: AiGameConciergeRecommendationInputSchema},
  output: {schema: AiGameConciergeRecommendationOutputSchema},
  prompt: `You are a friendly, expert game master and barista at Monoplay, Egypt's first board games cafe in Cairo.
Your goal is to recommend one board/card game and one drink that perfectly match a group's size and vibe.

Group Size: {{{groupSize}}}
Group Vibe: {{{groupVibe}}}

Choose a game from Monoplay's library for inspiration:
Strategy: Catan, Ticket to Ride, Splendor
Party: Codenames, Dixit
Card: Exploding Kittens, Uno
Deduction: Werewolf, Bang!
Classic: Jenga, Chess
Cooperative: Pandemic

Choose a drink from Monoplay's cafe menu for inspiration:
Hot Coffee (Espresso, Cappuccino, Spanish Latte, Turkish Coffee), Iced Coffee (Iced Spanish, Iced Pistachio), Signature Karak (Original Karak, Saffron Karak), Matcha (Strawberry Matcha, Spanish Matcha), Hot Chocolate, Smoothies, Refreshers (Mojito Soda, Hibiscus Refresher)

Recommend one game and one drink together, with a short, warm, upbeat reasoning that ties the pairing back to the group's size and vibe.

Example Output:
{
  "gameRecommendation": "Codenames",
  "drinkRecommendation": "Mixed Bubbles Refresher",
  "reasoning": "With a big, energetic group you want everyone shouting clues at once — Codenames keeps the whole table involved, and a cold Mixed Bubbles keeps the energy up between rounds."
}
`,
});

const aiGameConciergeRecommendationFlow = ai.defineFlow(
  {
    name: 'aiGameConciergeRecommendationFlow',
    inputSchema: AiGameConciergeRecommendationInputSchema,
    outputSchema: AiGameConciergeRecommendationOutputSchema,
  },
  async input => {
    try {
      const {output} = await prompt(input);
      if (!output) {
        throw new Error('The AI model returned an empty response.');
      }
      return output;
    } catch (error) {
      console.error('Genkit Flow Error:', error);
      throw new Error('The Game Concierge is resting up for the next round. Please try again in a moment.');
    }
  }
);
