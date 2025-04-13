import { BadRequestException, Injectable } from '@nestjs/common';
import { HeaderBannerEntity } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity } from 'apps/libs/db/entity/lawyer.banner.entity';
import { YoutubeLayoutEntity } from 'apps/libs/db/entity/youtube.layout.entity';
import { EntityManager } from 'typeorm';

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

        return banner;
    }

    async getYoutubeLayout() {
        const youtube = await this.em.findOneBy(YoutubeLayoutEntity, { id: 1 });
        if (!youtube) throw new BadRequestException();

        return youtube;
    }
}
