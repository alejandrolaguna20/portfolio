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
            tags: z.array(z.string()).optional()
        }),
});

export const collections = { workshop };
