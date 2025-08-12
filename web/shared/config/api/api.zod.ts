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
        category: z.enum([
            'INVESTMENTS',
            'TRADER',
            'CAPPER',
            'GAME',
            'CASINO',
            'EXCHANGES',
            'TRADING',
            'BROKER',
            'TECHNOLOGIES',
            'WORK',
        ]),
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
        params: z.string().default('{"one": "", "two": "", "three": ""}'),
        positionTop: z.number(),
        starRate: z.enum(['1', '2', '3', '4', '5']),
        rate: z.number(),
        subcribers: z.number(),
        reports: z.number(),
        reviews: z.number(),
        shortDescription: z.string(),
        tgUsername: z.string(),
        visible: z.enum(['VISIBLE', 'HIDDEN']).default('VISIBLE'),
        category: z.enum([
            'INVESTMENTS',
            'TRADER',
            'CAPPER',
            'GAME',
            'CASINO',
            'EXCHANGES',
            'TRADING',
            'BROKER',
            'TECHNOLOGIES',
            'WORK',
        ]),
        createdAt: z.string().datetime({ offset: true }),
        reviewDate: z.string().datetime({ offset: true }),
        profileLikes: z.number(),
        profileViews: z.number(),
        about: z.string(),
        notification: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        lastmod: z.string().datetime({ offset: true }),
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
export const SeoItem = z.object({ title: z.string(), description: z.string() }).passthrough();
export const PostPreviewItem = z
    .object({
        id: z.number(),
        url: z.string(),
        title: z.string(),
        likes: z.number(),
        views: z.number(),
        readTime: z.number(),
        date: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const PostPreviewList = z.object({ items: z.array(PostPreviewItem) }).passthrough();
export const PostItem = z
    .object({
        id: z.number(),
        url: z.string(),
        title: z.string(),
        post: z.string(),
        likes: z.number(),
        views: z.number(),
        readTime: z.number(),
        date: z.string().datetime({ offset: true }),
        notification: z.boolean().default(false),
        seo_title: z.string(),
        seo_description: z.string(),
        lastmod: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const PostCommentItem = z
    .object({
        id: z.number(),
        name: z.string(),
        comment: z.string(),
        postId: z.number(),
        date: z.string().datetime({ offset: true }),
        starRate: z.enum(['1', '2', '3', '4', '5']),
    })
    .passthrough();
export const PostCommentsList = z.object({ items: z.array(PostCommentItem) }).passthrough();
export const HeaderBannerItem = z
    .object({ id: z.number(), url: z.string().default(''), bannerType: z.enum(['YOUTUBE', 'LAWYER']) })
    .passthrough();
export const ImagesBannerItem = z
    .object({ id: z.number(), name: z.string(), url: z.string(), image: z.string() })
    .passthrough();
export const ImagesBannerList = z.object({ items: z.array(ImagesBannerItem) }).passthrough();
export const LawyerBanner = z
    .object({
        id: z.number(),
        visible: z.enum(['VISIBLE', 'HIDDEN']).default('HIDDEN'),
        name: z.string(),
        title: z.string(),
        avatar: z.string(),
        description: z.string(),
        reviews: z.number(),
        reports: z.number(),
        tgUrl: z.string(),
        detailsUrl: z.string(),
    })
    .passthrough();
export const LawyerBannerItem = z.object({ items: LawyerBanner.nullable() }).passthrough();
export const YoutubeLayoutItem = z
    .object({
        id: z.number(),
        visible: z.enum(['VISIBLE', 'HIDDEN']).default('VISIBLE'),
        name: z.string(),
        description: z.string(),
        videoId: z.string(),
        tgUrl: z.string(),
        youtubeUrl: z.string(),
    })
    .passthrough();
export const LawyerLayoutItem = z
    .object({
        id: z.number(),
        visible: z.enum(['VISIBLE', 'HIDDEN']).default('VISIBLE'),
        name: z.string(),
        description: z.string(),
        avatar: z.string(),
        tgUrl: z.string(),
        detailsUrl: z.string(),
    })
    .passthrough();
export const FooterStripItem = z.object({ id: z.number(), youtubeUrl: z.string(), tgUrl: z.string() }).passthrough();
export const ReviewRequestDto = z
    .object({
        username: z.string().max(30),
        userContact: z.string().max(30),
        comment: z.string().max(500),
        projectName: z.string().max(30),
        projectUrl: z.string().max(30),
    })
    .passthrough();
export const LawyerProfile = z
    .object({ id: z.number(), profile: z.string(), visible: z.enum(['VISIBLE', 'HIDDEN']).default('HIDDEN') })
    .passthrough();
export const LawyerProfileItem = z.object({ items: LawyerProfile.nullable() }).passthrough();
export const CommentStarRate = z.enum(['1', '2', '3', '4', '5']);
export const CommentType = z.enum(['SCAMMER', 'VERIFIED', 'NEWS', 'POST']);
export const CreateCommentDto = z
    .object({
        name: z.string().min(3).max(30),
        message: z.string().min(10).max(400),
        rate: CommentStarRate,
        projectId: z.string(),
        commentType: CommentType,
    })
    .passthrough();
export const SearchItem = z.object({ name: z.string(), url: z.string() }).passthrough();
export const SearchItemList = z.object({ items: z.array(SearchItem) }).passthrough();
export const NewsPreviewItem = z
    .object({
        id: z.number(),
        url: z.string(),
        avatar: z.string(),
        title: z.string(),
        views: z.number(),
        date: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const NewsPreviewList = z.object({ items: z.array(NewsPreviewItem) }).passthrough();
export const NewsItem = z
    .object({
        id: z.number(),
        url: z.string(),
        title: z.string(),
        avatar: z.string(),
        news: z.string(),
        likes: z.number(),
        views: z.number(),
        date: z.string().datetime({ offset: true }),
        notification: z.boolean().default(false),
        seo_title: z.string(),
        seo_description: z.string(),
        lastmod: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const NewsCommentItem = z
    .object({
        id: z.number(),
        name: z.string(),
        comment: z.string(),
        newsId: z.number(),
        date: z.string().datetime({ offset: true }),
        starRate: z.enum(['1', '2', '3', '4', '5']),
    })
    .passthrough();
export const NewsCommentList = z.object({ items: z.array(NewsCommentItem) }).passthrough();
export const VerifiedDemoProfileItem = z
    .object({
        id: z.number(),
        url: z.string(),
        name: z.string(),
        avatar_url: z.string(),
        positionTop: z.number(),
        starRate: z.enum(['1', '2', '3', '4', '5']),
        rate: z.number(),
        profit: z.number(),
        reviews: z.number(),
        shortDescription: z.string(),
        tgUsername: z.string(),
        category: z.enum([
            'INVESTMENTS',
            'TRADER',
            'CAPPER',
            'GAME',
            'CASINO',
            'EXCHANGES',
            'TRADING',
            'BROKER',
            'TECHNOLOGIES',
            'WORK',
        ]),
        visible: z.enum(['VISIBLE', 'HIDDEN']),
    })
    .passthrough();
export const VerifiedDemoProfileItemList = z.object({ items: z.array(VerifiedDemoProfileItem) }).passthrough();
export const VerifiedProfileItem = z
    .object({
        id: z.number(),
        url: z.string(),
        name: z.string(),
        avatar_url: z.string(),
        params: z.string().default('{"one": "", "two": "", "three": ""}'),
        positionTop: z.number(),
        starRate: z.enum(['1', '2', '3', '4', '5']),
        rate: z.number(),
        subcribers: z.number(),
        profit: z.number(),
        reviews: z.number(),
        shortDescription: z.string(),
        tgUsername: z.string(),
        visible: z.enum(['VISIBLE', 'HIDDEN']).default('VISIBLE'),
        category: z.enum([
            'INVESTMENTS',
            'TRADER',
            'CAPPER',
            'GAME',
            'CASINO',
            'EXCHANGES',
            'TRADING',
            'BROKER',
            'TECHNOLOGIES',
            'WORK',
        ]),
        createdAt: z.string().datetime({ offset: true }),
        reviewDate: z.string().datetime({ offset: true }),
        profileLikes: z.number(),
        profileViews: z.number(),
        about: z.string(),
        notification: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        lastmod: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const VerifiedCommentItem = z
    .object({
        id: z.number(),
        name: z.string(),
        comment: z.string(),
        projectId: z.number(),
        date: z.string().datetime({ offset: true }),
        starRate: z.enum(['1', '2', '3', '4', '5']),
    })
    .passthrough();
export const VerifiedCommentList = z.object({ items: z.array(VerifiedCommentItem) }).passthrough();
