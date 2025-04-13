import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('youtube_layout')
export class YoutubeLayoutEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    tgUrl!: string;

    @Column()
    @ApiProperty()
    youtubeUrl!: string;
}
