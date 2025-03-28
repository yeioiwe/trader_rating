import { ApiProperty } from '@nestjs/swagger';
import { ScummerCategory, ScummerStarRate, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';
import { IsDate, IsEnum, IsNumber, IsString } from 'nestjs-swagger-dto';

export class ScammerCreateDto {
    @IsString()
    url: string;

    @IsString()
    name!: string;

    @IsString()
    avatar_url!: string;

    @IsEnum({ enum: { ScummerStarRate } })
    starRate!: ScummerStarRate;

    @IsEnum({ enum: { ScummerCategory } })
    category!: ScummerCategory;

    @IsNumber()
    rate!: number;

    @IsNumber()
    subcribers!: number;

    @IsNumber()
    reports!: number;

    @IsNumber()
    reviews!: number;

    @IsString()
    shortDescription!: string;

    @IsString()
    tgUsername!: string;

    @IsDate({ format: 'date-time' })
    reviewDate!: Date;
}

export class ScammerEditAboutDto {
    @IsEnum({ enum: { ScummerVisible } })
    visible!: ScummerVisible;

    @IsNumber()
    profileLikes!: number;

    @IsNumber()
    profileViews!: number;

    @IsString()
    about!: string;
}

export class ScammerUpdatePositionItemDto {
    @IsNumber()
    id!: number;

    @IsNumber()
    positionTop!: number;
}

export class ScammerUpdatePositionListDto {
    @ApiProperty({
        type: [ScammerUpdatePositionItemDto],
    })
    items!: ScammerUpdatePositionItemDto[];
}
