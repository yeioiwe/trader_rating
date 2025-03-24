import { ScummerStarRate, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';
import { IsDate, IsEnum, IsNumber, IsString } from 'nestjs-swagger-dto';

export class ScammerCreateDto {
    @IsString()
    url: string;

    @IsString()
    password: string;

    @IsString()
    name!: string;

    @IsString()
    avatar_url!: string;

    @IsNumber()
    positionTop!: number;

    @IsEnum({ enum: { ScummerStarRate } })
    starRate!: ScummerStarRate;

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

    @IsEnum({ enum: { ScummerVisible } })
    visible!: ScummerVisible;

    @IsDate({ format: 'date-time' })
    createdAt!: Date;

    @IsDate({ format: 'date-time' })
    reviewDate!: Date;

    @IsNumber()
    profileLikes!: number;

    @IsNumber()
    profileViews!: number;
}
