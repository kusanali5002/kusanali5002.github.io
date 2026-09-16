import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activitiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('General'),
    cover: z.string().optional(),
    author: z.string().default('Ha Manh Dung (Dun)'),
    featured: z.boolean().default(false),
    isComingSoon: z.boolean().default(false),
  }),
});

const workspaceCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workspace' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    type: z.enum(['social', 'video', 'image', 'gallery', 'website', 'project']),
    platform: z.enum(['tiktok', 'youtube', 'instagram', 'bilibili', 'other']).optional(),
    url: z.string().optional(),
    thumbnail: z.string().optional(),
    media: z.string().optional(),
    poster: z.string().optional(),
    fallbackVideo: z.string().optional(),
    images: z.array(z.string()).optional(),
    source: z.object({
      platform: z.string(),
      url: z.string(),
      label: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    aspectRatio: z.enum(['16:9', '9:16', '1:1', '4:3', '2:3']).default('16:9'),
  }),
});

export const collections = {
  activities: activitiesCollection,
  workspace: workspaceCollection,
};
