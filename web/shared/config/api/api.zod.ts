import { z } from 'zod';

export const ScammerDemoProfileItem = z
    .object({
        id: z.number(),
        url: z.string(),
        name: z.string(),
        avatar_url: z.string(),
        positionTop: z.number(),
        starRate: z.enum(['1', '2', '3', '4', '5']),
        rate: z.number(),
        reports: z.number(),
        reviews: z.number(),
        shortDescription: z.string(),
        tgUsername: z.string(),
        category: z.enum(['INVESTMENTS', 'TRADER', 'CAPPER', 'GAME', 'CASINO', 'EXCHANGES']),
        visible: z.enum(['VISIBLE', 'HIDDEN']),
    })
    .passthrough();
export const ScammerDemoProfileItemList = z.object({ items: z.array(ScammerDemoProfileItem) }).passthrough();
export const ScammerProfileItem = z
    .object({
        id: z.number(),
        url: z.string(),
        name: z.string(),
        avatar_url: z.string(),
        positionTop: z.number(),
        starRate: z.enum(['1', '2', '3', '4', '5']),
        rate: z.number(),
        subcribers: z.number(),
        reports: z.number(),
        reviews: z.number(),
        shortDescription: z.string(),
        tgUsername: z.string(),
        visible: z.enum(['VISIBLE', 'HIDDEN']).default('VISIBLE'),
        category: z.enum(['INVESTMENTS', 'TRADER', 'CAPPER', 'GAME', 'CASINO', 'EXCHANGES']),
        createdAt: z.string().datetime({ offset: true }),
        reviewDate: z.string().datetime({ offset: true }),
        profileLikes: z.number(),
        profileViews: z.number(),
        about: z.string(),
    })
    .passthrough();
