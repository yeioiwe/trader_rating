import { ApiProperty } from '@nestjs/swagger';
import { ScammerCommentEntity } from 'apps/libs/db/entity/scammer.comment.entity';
import { ScammerEntity, ScummerCategory, ScummerStarRate, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';

export class ScammerDemoProfileItem {
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

    @ApiProperty({ enum: ScummerStarRate })
    starRate!: ScummerStarRate;

    @ApiProperty({ type: Number })
    rate!: number;

    @ApiProperty({ type: Number })
    reports!: number;

    @ApiProperty({ type: Number })
    reviews!: number;

    @ApiProperty({ type: String })
    shortDescription!: string;

    @ApiProperty({ type: String })
    tgUsername!: string;

    @ApiProperty({ enum: ScummerCategory })
    category!: ScummerCategory;

    @ApiProperty({ enum: ScummerVisible })
    visible!: ScummerVisible;
}

export class ScammerDemoProfileItemList {
    @ApiProperty({
        type: ScammerDemoProfileItem,
        isArray: true,
    })
    items!: ScammerDemoProfileItem[];
}

export class ScammerProfileItem extends ScammerEntity {}

export class ScammerCommentItem extends ScammerCommentEntity {}

export class ScammerCommentList {
    @ApiProperty({
        type: ScammerCommentItem,
        isArray: true,
    })
    items!: ScammerCommentItem[];
}

export class SeoItem {
    @ApiProperty({ type: String })
    title!: string;

    @ApiProperty({ type: String })
    description!: string;
}
