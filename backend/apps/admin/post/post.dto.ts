import { IsDate, IsNumber, IsString } from 'nestjs-swagger-dto';

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
