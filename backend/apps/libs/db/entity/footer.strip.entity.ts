import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('footer_strip')
export class FooterStripEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    youtubeUrl!: string;

    @Column()
    @ApiProperty()
    tgUrl!: string;
}
