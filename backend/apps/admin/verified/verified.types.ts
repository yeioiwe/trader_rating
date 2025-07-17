import { ApiProperty } from '@nestjs/swagger';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';
import { VerifiedCategory, VerifiedEntity, VerifiedVisible } from 'apps/libs/db/entity/verified.entity';

export class VerifiedDemoProfileItem {
    @ApiProperty({ type: Number })
    id!: number;

    @ApiProperty({ type: String })
    name!: string;

    @ApiProperty({ type: Number })
    positionTop!: number;

    @ApiProperty({ type: String })
    tgUsername!: string;

    @ApiProperty({ enum: VerifiedCategory })
    category!: VerifiedCategory;

    @ApiProperty({ enum: VerifiedVisible })
    visible!: VerifiedVisible;

    @ApiProperty({ type: Boolean })
    notification!: boolean;
}

export class VerifiedDemoProfileItemList {
    @ApiProperty({
        type: VerifiedDemoProfileItem,
        isArray: true,
    })
    items!: VerifiedDemoProfileItem[];
}

export class VerifiedProfileItem extends VerifiedEntity {}

export class VerifiedProfileAbout {
    @ApiProperty({ enum: VerifiedVisible })
    visible!: VerifiedVisible;

    @ApiProperty({ type: Number })
    profileLikes!: number;

    @ApiProperty({ type: Number })
    profileViews!: number;

    @ApiProperty({ type: String })
    about!: string;

    @ApiProperty({ type: String })
    params!: string;
}

export class VerifiedCommentItem extends VerifiedCommentEntity {}

export class VerifiedCommentList {
    @ApiProperty({
        type: VerifiedCommentItem,
        isArray: true,
    })
    items!: VerifiedCommentItem[];
}
