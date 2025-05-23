import { BadRequestException, Injectable } from '@nestjs/common';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity, LawyerBannerVisible } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity, LawyerLayoutVisible } from 'apps/libs/db/entity/lawyer.layout.entity';
import { LawyerProfileEntity, LawyerProfileVisible } from 'apps/libs/db/entity/lawyer.profile';
import { ReviewEntity } from 'apps/libs/db/entity/review.entity';
import { YoutubeLayoutEntity, YoutubeLayoutVisible } from 'apps/libs/db/entity/youtube.layout.entity';
import { EntityManager } from 'typeorm';
import { ReviewRequestDto } from './pages.dto';
import { Iteration } from 'ts-toolbelt';

@Injectable()
export class PagesService {
    constructor(private em: EntityManager) {}

    async getHeaderBanner() {
        const banner = await this.em.findOneBy(HeaderBannerEntity, { id: 1 });
        if (!banner) throw new BadRequestException();

        return banner;
    }

    async getImagesBanner() {
        const images = await this.em.find(ImagesBannerEntity);

        return { items: images };
    }

    async getLawyerBanner() {
        const banner = await this.em.findOneBy(LawyerBannerEntity, { id: 1 });
        if (!banner) throw new BadRequestException();

        if (banner.visible === LawyerBannerVisible.HIDDEN) return { items: null };

        return { items: banner };
    }

    async getYoutubeLayout() {
        const youtube = await this.em.findOneBy(YoutubeLayoutEntity, { id: 1 });
        if (!youtube) throw new BadRequestException();

        if (youtube.visible === YoutubeLayoutVisible.HIDDEN) throw new BadRequestException();

        return youtube;
    }

    async getLawyerLayout() {
        const lawyer = await this.em.findOneBy(LawyerLayoutEntity, { id: 1 });
        if (!lawyer) throw new BadRequestException();

        if (lawyer.visible === LawyerLayoutVisible.HIDDEN) throw new BadRequestException();

        return lawyer;
    }

    async getFooterStrip() {
        const footer = await this.em.findOneBy(FooterStripEntity, { id: 1 });
        if (!footer) throw new BadRequestException();

        return footer;
    }

    async createReviewRequest(dto: ReviewRequestDto) {
        const request = await this.em.create(ReviewEntity, { ...dto, createdAt: new Date() });

        await this.em.save(ReviewEntity, request);
    }

    async getLawyerProfile() {
        const profile = await this.em.findOneBy(LawyerProfileEntity, { id: 1 });

        if (!profile) throw new BadRequestException();

        if (profile.visible === LawyerProfileVisible.HIDDEN) return { items: null };

        return { items: profile };
    }
}
