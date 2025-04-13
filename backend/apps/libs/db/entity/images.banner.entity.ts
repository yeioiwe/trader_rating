import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images_banner')
export class ImagesBannerEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    name!: string;

    @Column()
    @ApiProperty()
    url!: string;

    @Column('mediumtext')
    @ApiProperty()
    image!: string;
}
