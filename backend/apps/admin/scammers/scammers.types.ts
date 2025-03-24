import { ApiProperty } from '@nestjs/swagger';

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
