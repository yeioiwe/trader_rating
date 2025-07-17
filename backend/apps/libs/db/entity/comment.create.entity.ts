import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommentStarRate } from './scammer.comment.entity';

export enum CommentType {
    SCAMMER = 'SCAMMER',
    VERIFIED = 'VERIFIED',
    NEWS = 'NEWS',
    POST = 'POST',
}

@Entity('comment_create')
export class CommentCreateEntity {
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
    projectId!: string;

    @Column('datetime')
    @ApiProperty({ type: Date })
    date!: Date;

    @ApiProperty({ enum: CommentType })
    @Column({ type: 'enum', enum: CommentType })
    commentType!: CommentType;

    @ApiProperty({ enum: CommentStarRate })
    @Column({ type: 'enum', enum: CommentStarRate })
    starRate!: CommentStarRate;
}
