import { ApiProperty } from '@nestjs/swagger';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';

export class NewsPreviewItem {
    @ApiProperty({ type: Number })
    id!: number;

    @ApiProperty({ type: String })
    title!: string;

    @ApiProperty({ type: Date })
    date!: Date;

    @ApiProperty({ type: Boolean })
    notification!: boolean;
}

export class NewsPreviewList {
    @ApiProperty({
        type: NewsPreviewItem,
        isArray: true,
    })
    items!: NewsPreviewItem[];
}

export class NewsItem extends NewsEntity {}

export class NewsCommentItem extends NewsCommentEntity {}

export class NewsCommentList {
    @ApiProperty({
        type: NewsCommentItem,
        isArray: true,
    })
    items!: NewsCommentItem[];
}
