import { BadRequestException, Injectable } from '@nestjs/common';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity, HeaderBannerType } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity, LawyerBannerVisible } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity, LawyerLayoutVisible } from 'apps/libs/db/entity/lawyer.layout.entity';
import { LawyerProfileEntity, LawyerProfileVisible } from 'apps/libs/db/entity/lawyer.profile';
import { ReviewEntity } from 'apps/libs/db/entity/review.entity';
import { YoutubeLayoutEntity, YoutubeLayoutVisible } from 'apps/libs/db/entity/youtube.layout.entity';
import { EntityManager } from 'typeorm';
import {
    CreateImagesBannerDto,
    EditFooterStripDto,
    EditLawyerBannerDto,
    EditLawyerLayoutDto,
    EditLawyerProfileDto,
    EditYoutubeLayoutDto,
    HeaderBannerEditDto,
} from './pages.dto';
import { CommentCreateEntity, CommentType } from 'apps/libs/db/entity/comment.create.entity';
import { ScammerEntity } from 'apps/libs/db/entity/scammer.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { VerifiedEntity } from 'apps/libs/db/entity/verified.entity';
import { ScammerCommentEntity } from 'apps/libs/db/entity/scammer.comment.entity';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { PostCommentEntity } from 'apps/libs/db/entity/post.comment.entity';

@Injectable()
export class PagesService {
    constructor(private em: EntityManager) {}

    async onModuleInit() {
        const headerBanner = await this.em.find(HeaderBannerEntity);
        if (headerBanner.length === 0) {
            const banner = this.em.create(HeaderBannerEntity, { bannerType: HeaderBannerType.YOUTUBE, url: '' });
            await this.em.save(HeaderBannerEntity, banner);
        }

        const lawyerBanner = await this.em.find(LawyerBannerEntity);
        if (lawyerBanner.length === 0) {
            const lawyer = this.em.create(LawyerBannerEntity, {
                detailsUrl: '',
                tgUrl: '',
                name: 'Иванов Иван',
                title: 'Квалифицированый специалист',
                description:
                    'Юрист с опытом в области финансовых и криптовалютных споров. Помогает клиентам вернуть средства, пострадавшим от недобросовестных трейдеров и мошенников. Обладает глубокими знаниями законодательства и практическим опытом решения проблем в криптовалютной сфере.',
                avatar: '',
                visible: LawyerBannerVisible.HIDDEN,
                reports: 15903,
                reviews: 2983,
            });
            await this.em.save(LawyerBannerEntity, lawyer);
        }

        const youtubeLayout = await this.em.find(YoutubeLayoutEntity);
        if (youtubeLayout.length === 0) {
            const youtube = this.em.create(YoutubeLayoutEntity, {
                tgUrl: '',
                youtubeUrl: '',
                name: 'YouTube Мориарти',
                description:
                    'Специалист по расследованию крипто-мошенничества, анализирует схемы обмана и помогает пользователям избежать финансовых потерь.',
                visible: YoutubeLayoutVisible.VISIBLE,
                videoId: '',
            });
            await this.em.save(YoutubeLayoutEntity, youtube);
        }

        const lawyerLayout = await this.em.find(LawyerLayoutEntity);
        if (lawyerLayout.length === 0) {
            const lawyer = this.em.create(LawyerLayoutEntity, {
                name: 'Сервей Сергеев',
                description:
                    'Юрист с опытом в области финансовых и криптовалютных споров. Помогает клиентам вернуть средства, пострадавшим от недобросовестных трейдеров и мошенников.',
                avatar: '',
                tgUrl: '',
                detailsUrl: '',
                visible: LawyerLayoutVisible.VISIBLE,
            });
            await this.em.save(LawyerLayoutEntity, lawyer);
        }

        const footerStrip = await this.em.find(FooterStripEntity);
        if (footerStrip.length === 0) {
            const footer = this.em.create(FooterStripEntity, { tgUrl: '', youtubeUrl: '' });
            await this.em.save(FooterStripEntity, footer);
        }

        const lawyerProfile = await this.em.find(LawyerProfileEntity);
        if (lawyerProfile.length === 0) {
            const profile = this.em.create(LawyerProfileEntity, {
                profile: '',
                visible: LawyerProfileVisible.HIDDEN,
            });
            await this.em.save(LawyerProfileEntity, profile);
        }
    }

    async editHeaderBanner(dto: HeaderBannerEditDto) {
        const banner = await this.em.findOneBy(HeaderBannerEntity, { id: 1 });
        if (!banner) throw new BadRequestException();

        await this.em.update(HeaderBannerEntity, { id: banner.id }, { ...dto });
    }

    async getHeaderBanner() {
        const banner = await this.em.findOneBy(HeaderBannerEntity, { id: 1 });
        if (!banner) throw new BadRequestException();

        return banner;
    }

    async createImagesBanner(dto: CreateImagesBannerDto) {
        const bannerImage = this.em.create(ImagesBannerEntity, { ...dto });

        await this.em.save(ImagesBannerEntity, bannerImage);
    }

    async getImagesBanner() {
        const images = await this.em.find(ImagesBannerEntity);

        return { items: images };
    }

    async deleteImagesBanner(id: number) {
        await this.em.delete(ImagesBannerEntity, { id });
    }

    async editLawyerBanner(dto: EditLawyerBannerDto) {
        await this.em.update(LawyerBannerEntity, { id: 1 }, { ...dto });
    }

    async getLawyerBanner() {
        const banner = await this.em.findOneBy(LawyerBannerEntity, { id: 1 });
        if (!banner) throw new BadRequestException();

        return banner;
    }

    async editYoutubeLayout(dto: EditYoutubeLayoutDto) {
        await this.em.update(YoutubeLayoutEntity, { id: 1 }, { ...dto });
    }

    async getYoutubeLayout() {
        const youtube = await this.em.findOneBy(YoutubeLayoutEntity, { id: 1 });
        if (!youtube) throw new BadRequestException();

        return youtube;
    }

    async getFooterStrip() {
        const footer = await this.em.findOneBy(FooterStripEntity, { id: 1 });
        if (!footer) throw new BadRequestException();

        return footer;
    }

    async editFooterStrip(dto: EditFooterStripDto) {
        await this.em.update(FooterStripEntity, { id: 1 }, { ...dto });
    }

    async editLawyerLayout(dto: EditLawyerLayoutDto) {
        await this.em.update(LawyerLayoutEntity, { id: 1 }, { ...dto });
    }

    async getLawyerLayout() {
        const lawyer = await this.em.findOneBy(LawyerLayoutEntity, { id: 1 });
        if (!lawyer) throw new BadRequestException();

        return lawyer;
    }

    async getReviewList() {
        const reviews = await this.em.find(ReviewEntity);

        return { items: reviews };
    }

    async deleteReview(id: number) {
        await this.em.delete(ReviewEntity, { id });
    }

    async editLawyerProfile(dto: EditLawyerProfileDto) {
        const profile = await this.em.findOneBy(LawyerProfileEntity, { id: 1 });

        if (!profile) throw new BadRequestException();

        await this.em.update(LawyerProfileEntity, { id: 1 }, { profile: dto.profile });
    }

    async getLawyerProfile() {
        const profile = await this.em.findOneBy(LawyerProfileEntity, { id: 1 });

        if (!profile) throw new BadRequestException();

        return profile;
    }

    async toggleLawyerVisible() {
        const lawyerBanner = await this.em.findOneBy(LawyerBannerEntity, { id: 1 });
        const lawyerProfile = await this.em.findOneBy(LawyerProfileEntity, { id: 1 });

        await this.em.update(
            LawyerBannerEntity,
            { id: 1 },
            {
                visible:
                    lawyerBanner?.visible === LawyerBannerVisible.HIDDEN
                        ? LawyerBannerVisible.VISIBLE
                        : LawyerBannerVisible.HIDDEN,
            },
        );

        await this.em.update(
            LawyerProfileEntity,
            { id: 1 },
            {
                visible:
                    lawyerProfile?.visible === LawyerProfileVisible.HIDDEN
                        ? LawyerProfileVisible.VISIBLE
                        : LawyerProfileVisible.HIDDEN,
            },
        );
    }

    async getLawyerVisible() {
        const lawyerBanner = await this.em.findOneBy(LawyerBannerEntity, { id: 1 });

        if (!lawyerBanner) throw new BadRequestException();

        return { visible: lawyerBanner.visible };
    }

    async getCommentRequestList(type: CommentType, projectId: number) {
        let project: { url: string } | null | undefined;
        switch (type) {
            case CommentType.SCAMMER:
                project = await this.em.findOneBy(ScammerEntity, { id: projectId });
                break;

            case CommentType.NEWS:
                project = await this.em.findOneBy(NewsEntity, { id: projectId });
                break;

            case CommentType.POST:
                project = await this.em.findOneBy(PostEntity, { id: projectId });
                break;

            case CommentType.VERIFIED:
                project = await this.em.findOneBy(VerifiedEntity, { id: projectId });
                break;
        }

        if (!project) {
            throw new BadRequestException('Project not found');
        }

        const requestComment = await this.em.find(CommentCreateEntity, {
            where: {
                commentType: type,
                projectId: project.url,
            },
        });

        return { items: requestComment };
    }

    async deleteRequestComment(id: number) {
        const requestComment = await this.em.findOneBy(CommentCreateEntity, { id });
        if (!requestComment) throw new BadRequestException();

        await this.em.delete(CommentCreateEntity, { id });
        switch (requestComment.commentType) {
            case CommentType.SCAMMER: {
                const project = await this.em.findOneBy(ScammerEntity, { url: requestComment.projectId });

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(ScammerEntity, { id: project?.id }, { notification: false });
                break;
            }
            case CommentType.VERIFIED: {
                const project = await this.em.findOneBy(VerifiedEntity, { url: requestComment.projectId });

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(VerifiedEntity, { id: project?.id }, { notification: false });

                break;
            }
            case CommentType.NEWS: {
                const project = await this.em.findOneBy(NewsEntity, { url: requestComment.projectId });

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(NewsEntity, { id: project?.id }, { notification: false });

                break;
            }
            case CommentType.POST: {
                const project = await this.em.findOneBy(PostEntity, { url: requestComment.projectId });

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(PostEntity, { id: project?.id }, { notification: false });

                break;
            }
        }
    }

    async saveRequestComment(id: number) {
        const commentRequest = await this.em.findOneBy(CommentCreateEntity, { id });

        if (!commentRequest) throw new BadRequestException();

        switch (commentRequest.commentType) {
            case CommentType.SCAMMER: {
                const project = await this.em.findOneBy(ScammerEntity, { url: commentRequest.projectId });

                await this.em.save(ScammerCommentEntity, { ...commentRequest, projectId: project?.id, id: undefined });
                await this.em.delete(CommentCreateEntity, id);

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(ScammerEntity, { id: project?.id }, { notification: false });

                break;
            }

            case CommentType.VERIFIED: {
                const project = await this.em.findOneBy(VerifiedEntity, { url: commentRequest.projectId });

                await this.em.save(VerifiedCommentEntity, { ...commentRequest, projectId: project?.id, id: undefined });
                await this.em.delete(CommentCreateEntity, id);

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(VerifiedEntity, { id: project?.id }, { notification: false });

                break;
            }

            case CommentType.NEWS: {
                const project = await this.em.findOneBy(NewsEntity, { url: commentRequest.projectId });

                await this.em.save(NewsCommentEntity, { ...commentRequest, newsId: project?.id, id: undefined });
                await this.em.delete(CommentCreateEntity, id);

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(NewsEntity, { id: project?.id }, { notification: false });

                break;
            }

            case CommentType.POST: {
                const project = await this.em.findOneBy(PostEntity, { url: commentRequest.projectId });

                await this.em.save(PostCommentEntity, { ...commentRequest, projectId: project?.id, id: undefined });
                await this.em.delete(CommentCreateEntity, id);

                const rv = await this.em.exists(CommentCreateEntity, {
                    where: { projectId: project?.url },
                });

                if (!rv) await this.em.update(PostEntity, { id: project?.id }, { notification: false });

                break;
            }
        }
    }
}
