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
export const PostCreatePreviewDto = z
    .object({
        url: z.string(),
        title: z.string(),
        likes: z.number(),
        views: z.number(),
        readTime: z.number(),
        date: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const PostEditContentDto = z.object({ post: z.string() }).passthrough();
export const PostPreviewItem = z
    .object({
        id: z.number(),
        title: z.string(),
        likes: z.number(),
        views: z.number(),
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
    })
    .passthrough();
export const PostCreateComment = z
    .object({
        name: z.string(),
        comment: z.string(),
        date: z.string().datetime({ offset: true }),
        starRate: CommentStarRate,
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
export const PostCommentList = z.object({ items: z.array(PostCommentItem) }).passthrough();
export const HeaderBannerType = z.enum(['YOUTUBE', 'LAWYER']);
export const HeaderBannerEditDto = z.object({ url: z.string(), bannerType: HeaderBannerType }).passthrough();
export const HeaderBannerItem = z
    .object({ id: z.number(), url: z.string().default(''), bannerType: z.enum(['YOUTUBE', 'LAWYER']) })
    .passthrough();
export const CreateImagesBannerDto = z.object({ url: z.string(), name: z.string(), image: z.string() }).passthrough();
export const ImagesBannerItem = z
    .object({ id: z.number(), name: z.string(), url: z.string(), image: z.string() })
    .passthrough();
export const ImagesBannerList = z.object({ items: z.array(ImagesBannerItem) }).passthrough();
export const EditLawyerBannerDto = z
    .object({
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
export const LawyerBannerItem = z
    .object({
        id: z.number(),
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
export const EditFooterStripDto = z.object({ tgUrl: z.string(), youtubeUrl: z.string() }).passthrough();
export const FooterStripItem = z.object({ id: z.number(), youtubeUrl: z.string(), tgUrl: z.string() }).passthrough();
export const YoutubeLayoutVisible = z.enum(['VISIBLE', 'HIDDEN']);
export const EditYoutubeLayoutDto = z
    .object({
        visible: YoutubeLayoutVisible,
        name: z.string(),
        description: z.string(),
        videoId: z.string(),
        tgUrl: z.string(),
        youtubeUrl: z.string(),
    })
    .passthrough();
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
export const LawyerLayoutVisible = z.enum(['VISIBLE', 'HIDDEN']);
export const EditLawyerLayoutDto = z
    .object({
        visible: LawyerLayoutVisible,
        name: z.string(),
        description: z.string(),
        avatar: z.string(),
        tgUrl: z.string(),
        detailsUrl: z.string(),
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
export const ReviewItem = z
    .object({
        id: z.number(),
        username: z.string(),
        userContact: z.string(),
        comment: z.string(),
        projectName: z.string(),
        projectUrl: z.string(),
        createdAt: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const ReviewList = z.object({ items: z.array(ReviewItem) }).passthrough();
export const EditLawyerProfileDto = z.object({ profile: z.string() }).passthrough();
export const LawyerProfileItem = z.object({ id: z.number(), profile: z.string() }).passthrough();
export const NewsCreateDto = z
    .object({
        url: z.string(),
        title: z.string(),
        avatar: z.string(),
        news: z.string(),
        likes: z.number(),
        views: z.number(),
        date: z.string().datetime({ offset: true }),
    })
    .passthrough();
export const NewsPreviewItem = z
    .object({ id: z.number(), title: z.string(), date: z.string().datetime({ offset: true }) })
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
    })
    .passthrough();
export const NewsCreateComment = z
    .object({
        name: z.string(),
        comment: z.string(),
        date: z.string().datetime({ offset: true }),
        starRate: CommentStarRate,
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
