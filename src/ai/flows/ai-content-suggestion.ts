'use server';
/**
 * @fileOverview An AI agent that generates content suggestions for portfolio descriptions or summary statements.
 *
 * - suggestContent - A function that handles the content suggestion process.
 * - AiContentSuggestionInput - The input type for the suggestContent function.
 * - AiContentSuggestionOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContentSuggestionInputSchema = z.object({
  type: z
    .enum(['project_description', 'summary_statement'])
    .describe('The type of content to generate: project description or summary statement.'),
  context: z
    .string()
    .describe('The main context or topic for the content (e.g., project name, core skills).'),
  details: z
    .string()
    .optional()
    .describe('Additional details to include (e.g., technologies, achievements, goals).'),
  tone: z
    .string()
    .optional()
    .describe('The desired tone for the content (e.g., professional, concise, innovative).'),
  maxLength: z.number().optional().describe('Maximum length of the suggestion in words.'),
});
export type AiContentSuggestionInput = z.infer<typeof AiContentSuggestionInputSchema>;

const AiContentSuggestionOutputSchema = z.object({
  suggestion: z.string().describe('The AI-generated content suggestion.'),
});
export type AiContentSuggestionOutput = z.infer<typeof AiContentSuggestionOutputSchema>;

export async function suggestContent(
  input: AiContentSuggestionInput
): Promise<AiContentSuggestionOutput> {
  return aiContentSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiContentSuggestionPrompt',
  input: {schema: AiContentSuggestionInputSchema},
  output: {schema: AiContentSuggestionOutputSchema},
  prompt: `You are an AI assistant specialized in writing compelling portfolio content.
Your task is to generate a concise and impactful {{{type}}} based on the provided information.

Context: {{{context}}}
{{#if details}}Details: {{{details}}}{{/if}}
{{#if tone}}Desired Tone: {{{tone}}}{{/if}}
{{#if maxLength}}Keep the suggestion under {{{maxLength}}} words.{{/if}}

Please provide only the suggested text in the 'suggestion' field of the JSON output.`,
});

const aiContentSuggestionFlow = ai.defineFlow(
  {
    name: 'aiContentSuggestionFlow',
    inputSchema: AiContentSuggestionInputSchema,
    outputSchema: AiContentSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
