import { CommentStarRate } from 'apps/libs/db/entity/scammer.comment.entity';
import { IsDate, IsEnum, IsNumber, IsString } from 'nestjs-swagger-dto';

export class PostCreatePreviewDto {
    @IsString()
    url!: string;

    @IsString()
    title!: string;

    @IsNumber()
    likes!: number;

    @IsNumber()
    views!: number;

    @IsNumber()
    readTime!: number;

    @IsDate({ format: 'date-time' })
    date!: Date;
}

export class PostEditContentDto {
    @IsString()
    post!: string;
}

export class PostCreateComment {
    @IsString()
    name!: string;

    @IsString()
    comment!: string;

    @IsDate({ format: 'date-time' })
    date!: Date;

    @IsEnum({ enum: { CommentStarRate } })
    starRate!: CommentStarRate;
}
