import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommentStarRate } from './scammer.comment.entity';

@Entity('post_comment')
export class PostCommentEntity {
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
    postId!: number;

    @Column('datetime')
    @ApiProperty({ type: Date })
    date!: Date;

    @ApiProperty({ enum: CommentStarRate })
    @Column({ type: 'enum', enum: CommentStarRate })
    starRate!: CommentStarRate;
}
