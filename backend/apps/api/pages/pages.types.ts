import { ApiProperty } from '@nestjs/swagger';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity } from 'apps/libs/db/entity/lawyer.layout.entity';
import { LawyerProfileEntity } from 'apps/libs/db/entity/lawyer.profile';
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

export class LawyerBanner extends LawyerBannerEntity {}

export class LawyerBannerItem {
    @ApiProperty({
        type: LawyerBanner,
        nullable: true,
    })
    items!: LawyerBanner | null;
}

export class YoutubeLayoutItem extends YoutubeLayoutEntity {}

export class LawyerLayoutItem extends LawyerLayoutEntity {}

export class FooterStripItem extends FooterStripEntity {}

export class LawyerProfile extends LawyerProfileEntity {}

export class LawyerProfileItem {
    @ApiProperty({
        type: LawyerProfile,
        nullable: true,
    })
    items!: LawyerProfile | null;
}

export class SearchItem {
    @ApiProperty({ type: String })
    name!: string;

    @ApiProperty({ type: String })
    url!: string;
}

export class SearchItemList {
    @ApiProperty({
        type: SearchItem,
        isArray: true,
    })
    items!: SearchItem[];
}
