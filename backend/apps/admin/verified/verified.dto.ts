import { ApiProperty } from '@nestjs/swagger';
import { CommentStarRate } from 'apps/libs/db/entity/scammer.comment.entity';
import { VerifiedCategory, VerifiedStarRate, VerifiedVisible } from 'apps/libs/db/entity/verified.entity';
import { IsDate, IsEnum, IsNumber, IsString } from 'nestjs-swagger-dto';

export class VerifiedCreateDto {
    @IsString()
    url: string;

    @IsString()
    name!: string;

    @IsString()
    avatar_url!: string;

    @IsEnum({ enum: { VerifiedStarRate } })
    starRate!: VerifiedStarRate;

    @IsEnum({ enum: { VerifiedCategory } })
    category!: VerifiedCategory;

    @IsNumber()
    rate!: number;

    @IsNumber()
    subcribers!: number;

    @IsNumber()
    profit!: number;

    @IsNumber()
    reviews!: number;

    @IsString()
    shortDescription!: string;

    @IsString()
    tgUsername!: string;

    @IsDate({ format: 'date-time' })
    reviewDate!: Date;
}

export class VerifiedEditAboutDto {
    @IsEnum({ enum: { VerifiedVisible } })
    visible!: VerifiedVisible;

    @IsNumber()
    profileLikes!: number;

    @IsNumber()
    profileViews!: number;

    @IsString()
    about!: string;

    @IsString()
    params!: string;
}

export class VerifiedUpdatePositionItemDto {
    @IsNumber()
    id!: number;

    @IsNumber()
    positionTop!: number;
}

export class VerifiedUpdatePositionListDto {
    @ApiProperty({
        type: [VerifiedUpdatePositionItemDto],
    })
    items!: VerifiedUpdatePositionItemDto[];
}

export class VerifiedCreateComment {
    @IsString()
    name!: string;

    @IsString()
    comment!: string;

    @IsDate({ format: 'date-time' })
    date!: Date;

    @IsEnum({ enum: { CommentStarRate } })
    starRate!: CommentStarRate;
}

export class CreateSeoDto {
    @IsString()
    title!: string;

    @IsString()
    description!: string;
}
