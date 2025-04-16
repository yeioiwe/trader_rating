import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity } from 'apps/libs/db/entity/lawyer.layout.entity';
import { YoutubeLayoutEntity } from 'apps/libs/db/entity/youtube.layout.entity';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            HeaderBannerEntity,
            ImagesBannerEntity,
            LawyerBannerEntity,
            YoutubeLayoutEntity,
            FooterStripEntity,
            LawyerLayoutEntity,
        ]),
    ],
    providers: [PagesService],
    controllers: [PagesController],
})
export class PagesModule {}
