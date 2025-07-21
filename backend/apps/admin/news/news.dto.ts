import { CommentStarRate } from 'apps/libs/db/entity/scammer.comment.entity';
import { IsDate, IsEnum, IsNumber, IsString } from 'nestjs-swagger-dto';

export class NewsCreateDto {
    @IsString()
    url!: string;

    @IsString()
    title!: string;

    @IsString()
    avatar!: string;

    @IsString()
    news!: string;

    @IsNumber()
    likes!: number;

    @IsNumber()
    views!: number;

    @IsDate({ format: 'date-time' })
    date!: Date;
}

export class NewsCreateComment {
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
