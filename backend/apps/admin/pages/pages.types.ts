import { ApiProperty } from '@nestjs/swagger';
import { CommentCreateEntity } from 'apps/libs/db/entity/comment.create.entity';
import { FooterStripEntity } from 'apps/libs/db/entity/footer.strip.entity';
import { HeaderBannerEntity } from 'apps/libs/db/entity/header.banner.entity';
import { ImagesBannerEntity } from 'apps/libs/db/entity/images.banner.entity';
import { LawyerBannerEntity, LawyerBannerVisible } from 'apps/libs/db/entity/lawyer.banner.entity';
import { LawyerLayoutEntity } from 'apps/libs/db/entity/lawyer.layout.entity';
import { LawyerProfileEntity } from 'apps/libs/db/entity/lawyer.profile';
import { ReviewEntity } from 'apps/libs/db/entity/review.entity';
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

export class ReviewItem extends ReviewEntity {}

export class ReviewList {
    @ApiProperty({
        type: ReviewItem,
        isArray: true,
    })
    items!: ReviewItem[];
}

export class LawyerProfileItem extends LawyerProfileEntity {}

export class LawyerVisible {
    @ApiProperty({ enum: LawyerBannerVisible })
    visible!: LawyerBannerVisible;
}

export class CommentCreateItem extends CommentCreateEntity {}

export class CommentCreateItemList {
    @ApiProperty({
        type: CommentCreateItem,
        isArray: true,
    })
    items!: CommentCreateItem[];
}
