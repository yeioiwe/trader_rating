import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommentStarRate } from './scammer.comment.entity';

@Entity('news_comment')
export class NewsCommentEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    name!: string;

    @Column('mediumtext')
    @ApiProperty()
    comment!: string;

    @Column()
    @ApiProperty()
    newsId!: number;

    @Column('datetime')
    @ApiProperty({ type: Date })
    date!: Date;

    @ApiProperty({ enum: CommentStarRate })
    @Column({ type: 'enum', enum: CommentStarRate })
    starRate!: CommentStarRate;
}
