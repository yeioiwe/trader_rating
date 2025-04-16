import { ApiProperty } from '@nestjs/swagger';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity } from 'apps/libs/db/entity/lawyer.layout.entity';
import { YoutubeLayoutEntity } from 'apps/libs/db/entity/youtube.layout.entity';

export class HeaderBannerItem extends HeaderBannerEntity {}

export class ImagesBannerItem extends ImagesBannerEntity {}

export class ImagesBannerList {
    @ApiProperty({
        type: ImagesBannerItem,
        isArray: true,
    })
    items!: ImagesBannerItem[];
}

export class LawyerBannerItem extends LawyerBannerEntity {}

export class YoutubeLayoutItem extends YoutubeLayoutEntity {}

export class LawyerLayoutItem extends LawyerLayoutEntity {}

export class FooterStripItem extends FooterStripEntity {}
