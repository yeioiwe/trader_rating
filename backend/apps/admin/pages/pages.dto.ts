import { HeaderBannerType } from 'apps/libs/db/entity/header.banner.entity';
import { IsEnum, IsNumber, IsString } from 'nestjs-swagger-dto';

export class HeaderBannerEditDto {
    @IsString()
    url!: string;

    @IsEnum({ enum: { HeaderBannerType } })
    bannerType!: HeaderBannerType;
}

export class CreateImagesBannerDto {
    @IsString()
    url!: string;

    @IsString()
    name!: string;

    @IsString()
    image!: string;
}

export class EditLawyerBannerDto {
    @IsString()
    name!: string;

    @IsString()
    title!: string;

    @IsString()
    avatar!: string;

    @IsString()
    description!: string;

    @IsNumber()
    reviews!: number;

    @IsNumber()
    reports!: number;

    @IsString()
    tgUrl!: string;

    @IsString()
    detailsUrl!: string;
}

export class EditYoutubeLayoutDto {
    @IsString()
    tgUrl!: string;

    @IsString()
    youtubeUrl!: string;
}

export class EditFooterStripDto {
    @IsString()
    tgUrl!: string;

    @IsString()
    youtubeUrl!: string;
}
