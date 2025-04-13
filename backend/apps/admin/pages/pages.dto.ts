import { HeaderBannerType } from 'apps/libs/db/entity/header.banner.entity';
import { IsEnum, IsString } from 'nestjs-swagger-dto';

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
