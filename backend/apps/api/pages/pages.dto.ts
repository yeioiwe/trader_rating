import { IsString } from 'nestjs-swagger-dto';

export class ReviewRequestDto {
    @IsString({ maxLength: 30 })
    username!: string;

    @IsString({ maxLength: 30 })
    userContact!: string;

    @IsString({ maxLength: 500 })
    comment!: string;

    @IsString({ maxLength: 30 })
    projectName!: string;

    @IsString({ maxLength: 30 })
    projectUrl!: string;
}
