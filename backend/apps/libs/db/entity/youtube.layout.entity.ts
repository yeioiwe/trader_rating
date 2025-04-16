import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum YoutubeLayoutVisible {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
}

@Entity('youtube_layout')
export class YoutubeLayoutEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @ApiProperty({ enum: YoutubeLayoutVisible, default: YoutubeLayoutVisible.VISIBLE })
    @Column({ type: 'enum', enum: YoutubeLayoutVisible, default: YoutubeLayoutVisible.VISIBLE })
    visible!: YoutubeLayoutVisible;

    @Column()
    @ApiProperty()
    name!: string;

    @Column('mediumtext')
    @ApiProperty()
    description!: string;

    @Column()
    @ApiProperty()
    videoId!: string;

    @Column()
    @ApiProperty()
    tgUrl!: string;

    @Column()
    @ApiProperty()
    youtubeUrl!: string;
}
