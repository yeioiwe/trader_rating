import { BadRequestException, Injectable } from '@nestjs/common';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity, HeaderBannerType } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity, LawyerLayoutVisible } from 'apps/libs/db/entity/lawyer.layout.entity';
import { YoutubeLayoutEntity, YoutubeLayoutVisible } from 'apps/libs/db/entity/youtube.layout.entity';
import { EntityManager } from 'typeorm';
import {
    CreateImagesBannerDto,
    EditFooterStripDto,
    EditLawyerBannerDto,
    EditLawyerLayoutDto,
    EditYoutubeLayoutDto,
    HeaderBannerEditDto,
} from './pages.dto';

@Injectable()
export class PagesService {
    constructor(private em: EntityManager) {}

    async onModuleInit() {
        const headerBanner = await this.em.find(HeaderBannerEntity);
        if (headerBanner.length === 0) {
            const banner = await this.em.create(HeaderBannerEntity, { bannerType: HeaderBannerType.YOUTUBE, url: '' });
            await this.em.save(HeaderBannerEntity, banner);
        }

        const lawyerBanner = await this.em.find(LawyerBannerEntity);
        if (lawyerBanner.length === 0) {
            const lawyer = await this.em.create(LawyerBannerEntity, {
                detailsUrl: '',
                tgUrl: '',
                name: 'Иванов Иван',
                title: 'Квалифицированый специалист',
                description:
                    'Юрист с опытом в области финансовых и криптовалютных споров. Помогает клиентам вернуть средства, пострадавшим от недобросовестных трейдеров и мошенников. Обладает глубокими знаниями законодательства и практическим опытом решения проблем в криптовалютной сфере.',
                avatar: '',
                reports: 15903,
                reviews: 2983,
            });
            await this.em.save(LawyerBannerEntity, lawyer);
        }

        const youtubeLayout = await this.em.find(YoutubeLayoutEntity);
        if (youtubeLayout.length === 0) {
            const youtube = await this.em.create(YoutubeLayoutEntity, {
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
            const lawyer = await this.em.create(LawyerLayoutEntity, {
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
            const footer = await this.em.create(FooterStripEntity, { tgUrl: '', youtubeUrl: '' });
            await this.em.save(FooterStripEntity, footer);
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
        const bannerImage = await this.em.create(ImagesBannerEntity, { ...dto });

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
}
