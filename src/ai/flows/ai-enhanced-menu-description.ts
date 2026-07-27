'use server';
/**
 * @fileOverview This file implements a Genkit flow to generate evocative and unique descriptions
 * for CURIO menu items, highlighting craftsmanship, origin, and tasting notes.
 *
 * - aiEnhancedMenuDescription - A function that handles the AI description generation process.
 * - AiEnhancedMenuDescriptionInput - The input type for the aiEnhancedMenuDescription function.
 * - AiEnhancedMenuDescriptionOutput - The return type for the aiEnhancedMenuDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiEnhancedMenuDescriptionInputSchema = z.object({
  itemName: z.string().describe('The name of the menu item.'),
  shortDescription: z.string().describe('A brief, existing description of the menu item.'),
  category: z.string().optional().describe('The category of the menu item (e.g., "Hot Coffee", "Matcha", "Food").'),
});
export type AiEnhancedMenuDescriptionInput = z.infer<typeof AiEnhancedMenuDescriptionInputSchema>;

const AiEnhancedMenuDescriptionOutputSchema = z.string().describe('An evocative and unique description for the menu item.');
export type AiEnhancedMenuDescriptionOutput = z.infer<typeof AiEnhancedMenuDescriptionOutputSchema>;

export async function aiEnhancedMenuDescription(input: AiEnhancedMenuDescriptionInput): Promise<AiEnhancedMenuDescriptionOutput> {
  return aiEnhancedMenuDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiEnhancedMenuDescriptionPrompt',
  input: {schema: AiEnhancedMenuDescriptionInputSchema},
  output: {schema: AiEnhancedMenuDescriptionOutputSchema},
  prompt: `You are a friendly menu writer for Monoplay, Egypt's first board games cafe. Your task is to craft a short, inviting description for the following menu item.

Focus on flavor and comfort — this is a menu for people settling in for a long game night. The tone should be warm, playful, and unpretentious, aligning with Monoplay's brand personality:
Fun, Social, Welcoming, Energetic, Cozy, and Community-driven.

Avoid generic cafe language, unnecessary jargon, or overly decorative phrases. Embrace the 'less but better' philosophy, making every word count to convey luxury and depth. The language should be warm, organic, and sophisticated.

Menu Item: {{{itemName}}}
Existing Short Description: {{{shortDescription}}}
{{#if category}}Category: {{{category}}}{{/if}}

Craft a single, concise paragraph that captures the essence and premium quality of this item.`,
});

const aiEnhancedMenuDescriptionFlow = ai.defineFlow(
  {
    name: 'aiEnhancedMenuDescriptionFlow',
    inputSchema: AiEnhancedMenuDescriptionInputSchema,
    outputSchema: AiEnhancedMenuDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate menu item description.');
    }
    return output;
  }
);
