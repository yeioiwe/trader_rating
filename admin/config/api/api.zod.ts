import { z } from 'zod';

export const AuthDto = z.object({ login: z.string(), password: z.string() }).passthrough();
export const AuthResponse = z.object({ authToken: z.string() }).passthrough();
export const ScummerStarRate = z.enum(['1', '2', '3', '4', '5']);
export const ScummerCategory = z.enum(['INVESTMENTS', 'TRADER', 'CAPPER', 'GAME', 'CASINO', 'EXCHANGES']);
export const ScammerCreateDto = z
    .object({
        url: z.string(),
        name: z.string(),
        avatar_url: z.string(),
        starRate: ScummerStarRate,
        category: ScummerCategory,
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
    .object({
        id: z.number(),
        name: z.string(),
        positionTop: z.number(),
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
export const ScammerProfileAbout = z
    .object({
        visible: z.enum(['VISIBLE', 'HIDDEN']),
        profileLikes: z.number(),
        profileViews: z.number(),
        about: z.string(),
    })
    .passthrough();
export const ScummerVisible = z.enum(['VISIBLE', 'HIDDEN']);
export const ScammerEditAboutDto = z
    .object({ visible: ScummerVisible, profileLikes: z.number(), profileViews: z.number(), about: z.string() })
    .passthrough();
export const ScammerUpdatePositionItemDto = z.object({ id: z.number(), positionTop: z.number() }).passthrough();
export const ScammerUpdatePositionListDto = z.object({ items: z.array(ScammerUpdatePositionItemDto) }).passthrough();
export const CommentStarRate = z.enum(['1', '2', '3', '4', '5']);
export const ScammerCreateComment = z
    .object({
        name: z.string(),
        comment: z.string(),
        date: z.string().datetime({ offset: true }),
        starRate: CommentStarRate,
    })
    .passthrough();
export const ScammerCommentItem = z
    .object({
        id: z.number(),
        name: z.string(),
        comment: z.string(),
        projectId: z.number(),
        date: z.string().datetime({ offset: true }),
        starRate: z.enum(['1', '2', '3', '4', '5']),
    })
    .passthrough();
export const ScammerCommentList = z.object({ items: z.array(ScammerCommentItem) }).passthrough();
