import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workshop = defineCollection({
    loader: glob({ base: './src/content/workshop', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            heroImageCredit: z.string().optional(),
            tags: z.array(z.string()).optional(),
            private: z.boolean().optional()
        }),
});

const log = defineCollection({
    loader: glob({ base: './src/content/log', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            heroImageCredit: z.string().optional(),
            tags: z.array(z.string()).optional(),
            private: z.boolean().optional()
        }),
});

const library = defineCollection({
    loader: glob({ base: './src/content/library', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            heroImageCredit: z.string().optional(),
            tags: z.array(z.string()).optional(),
            private: z.boolean().optional()
        }),
});


export const collections = { workshop, log, library };
