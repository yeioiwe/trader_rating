import { ApiProperty } from '@nestjs/swagger';
import { ScammerEntity, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';

export class ScammerDemoProfileItem {
    @ApiProperty({ type: Number })
    id!: number;

    @ApiProperty({ type: String })
    name!: string;

    @ApiProperty({ type: Number })
    positionTop!: number;
}

export class ScammerDemoProfileItemList {
    @ApiProperty({
        type: ScammerDemoProfileItem,
        isArray: true,
    })
    items!: ScammerDemoProfileItem[];
}

export class ScammerProfileItem extends ScammerEntity {}

export class ScammerProfileAbout {
    @ApiProperty({ enum: ScummerVisible })
    visible!: ScummerVisible;

    @ApiProperty({ type: Number })
    profileLikes!: number;

    @ApiProperty({ type: Number })
    profileViews!: number;
}
