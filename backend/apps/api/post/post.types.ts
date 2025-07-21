import { ApiProperty } from '@nestjs/swagger';
import { PostCommentEntity } from 'apps/libs/db/entity/post.comment.entity';
import { PostEntity } from 'apps/libs/db/entity/post.entity';

export class PostPreviewItem {
    @ApiProperty({ type: Number })
    id!: number;

    @ApiProperty({ type: String })
    url!: string;

    @ApiProperty({ type: String })
    title!: string;

    @ApiProperty({ type: Number })
    likes!: number;

    @ApiProperty({ type: Number })
    views!: number;

    @ApiProperty({ type: Number })
    readTime!: number;

    @ApiProperty({ type: Date })
    date!: Date;
}

export class PostPreviewList {
    @ApiProperty({
        type: PostPreviewItem,
        isArray: true,
    })
    items!: PostPreviewItem[];
}

export class PostItem extends PostEntity {}

export class PostCommentItem extends PostCommentEntity {}

export class PostCommentsList {
    @ApiProperty({
        type: PostCommentItem,
        isArray: true,
    })
    items!: PostCommentItem[];
}

export class SeoItem {
    @ApiProperty({ type: String })
    title!: string;

    @ApiProperty({ type: String })
    description!: string;
}
