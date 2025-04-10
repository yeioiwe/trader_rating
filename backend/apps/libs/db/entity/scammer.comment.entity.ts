import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CommentStarRate {
    STAR_1 = '1',
    STAR_2 = '2',
    STAR_3 = '3',
    STAR_4 = '4',
    STAR_5 = '5',
}

@Entity('scammer_comment')
export class ScammerCommentEntity {
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
    projectId!: number;

    @Column('datetime')
    @ApiProperty({ type: Date })
    date!: Date;

    @ApiProperty({ enum: CommentStarRate })
    @Column({ type: 'enum', enum: CommentStarRate })
    starRate!: CommentStarRate;
}
