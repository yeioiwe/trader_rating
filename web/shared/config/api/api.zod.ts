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
