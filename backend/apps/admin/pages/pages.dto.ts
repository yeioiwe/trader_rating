import { HeaderBannerType } from 'apps/libs/db/entity/header.banner.entity';
import { LawyerLayoutVisible } from 'apps/libs/db/entity/lawyer.layout.entity';
import { YoutubeLayoutVisible } from 'apps/libs/db/entity/youtube.layout.entity';
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
    @IsEnum({ enum: { YoutubeLayoutVisible } })
    visible!: YoutubeLayoutVisible;

    @IsString()
    name!: string;

    @IsString()
    description!: string;

    @IsString()
    videoId!: string;

    @IsString()
    tgUrl!: string;

    @IsString()
    youtubeUrl!: string;
}

export class EditLawyerLayoutDto {
    @IsEnum({ enum: { LawyerLayoutVisible } })
    visible!: LawyerLayoutVisible;

    @IsString()
    name!: string;

    @IsString()
    description!: string;

    @IsString()
    avatar!: string;

    @IsString()
    tgUrl!: string;

    @IsString()
    detailsUrl!: string;
}

export class EditFooterStripDto {
    @IsString()
    tgUrl!: string;

    @IsString()
    youtubeUrl!: string;
}
