import { ApiProperty } from '@nestjs/swagger';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';
import {
    VerifiedCategory,
    VerifiedEntity,
    VerifiedStarRate,
    VerifiedVisible,
} from 'apps/libs/db/entity/verified.entity';

export class VerifiedDemoProfileItem {
    @ApiProperty({ type: Number })
    id!: number;

    @ApiProperty({ type: String })
    url!: string;

    @ApiProperty({ type: String })
    name!: string;

    @ApiProperty({ type: String })
    avatar_url!: string;

    @ApiProperty({ type: Number })
    positionTop!: number;

    @ApiProperty({ enum: VerifiedStarRate })
    starRate!: VerifiedStarRate;

    @ApiProperty({ type: Number })
    rate!: number;

    @ApiProperty({ type: Number })
    profit!: number;

    @ApiProperty({ type: Number })
    reviews!: number;

    @ApiProperty({ type: String })
    shortDescription!: string;

    @ApiProperty({ type: String })
    tgUsername!: string;

    @ApiProperty({ enum: VerifiedCategory })
    category!: VerifiedCategory;

    @ApiProperty({ enum: VerifiedVisible })
    visible!: VerifiedVisible;
}

export class VerifiedDemoProfileItemList {
    @ApiProperty({
        type: VerifiedDemoProfileItem,
        isArray: true,
    })
    items!: VerifiedDemoProfileItem[];
}

export class VerifiedProfileItem extends VerifiedEntity {}

export class VerifiedCommentItem extends VerifiedCommentEntity {}

export class VerifiedCommentList {
    @ApiProperty({
        type: VerifiedCommentItem,
        isArray: true,
    })
    items!: VerifiedCommentItem[];
}

export class SeoItem {
    @ApiProperty({ type: String })
    title!: string;

    @ApiProperty({ type: String })
    description!: string;
}
