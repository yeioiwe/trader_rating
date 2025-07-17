import { CommentType } from 'apps/libs/db/entity/comment.create.entity';
import { CommentStarRate } from 'apps/libs/db/entity/scammer.comment.entity';
import { IsEnum, IsString } from 'nestjs-swagger-dto';

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

export class CreateCommentDto {
    @IsString({ minLength: 3, maxLength: 30 })
    name!: string;

    @IsString({ minLength: 10, maxLength: 400 })
    message!: string;

    @IsEnum({ enum: { CommentStarRate } })
    rate!: CommentStarRate;

    @IsString()
    projectId!: string;

    @IsEnum({ enum: { CommentType } })
    commentType!: CommentType;
}
