import { z } from 'zod';

export const AuthDto = z.object({ login: z.string(), password: z.string() }).passthrough();
export const AuthResponse = z.object({ authToken: z.string() }).passthrough();
export const ScummerStarRate = z.enum(['1', '2', '3', '4', '5']);
export const ScammerCreateDto = z
    .object({
        url: z.string(),
        name: z.string(),
        avatar_url: z.string(),
        starRate: ScummerStarRate,
        rate: z.number(),
        subcribers: z.number(),
        reports: z.number(),
        reviews: z.number(),
        shortDescription: z.string(),
        tgUsername: z.string(),
        reviewDate: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const ScammerDemoProfileItem = z
    .object({ id: z.number(), name: z.string(), positionTop: z.number() })
    .passthrough();
export const ScammerDemoProfileItemList = z.object({ items: z.array(ScammerDemoProfileItem) }).passthrough();
