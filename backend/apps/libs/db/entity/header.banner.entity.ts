import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum HeaderBannerType {
    YOUTUBE = 'YOUTUBE',
    LAWYER = 'LAWYER',
}

@Entity('header_banner')
export class HeaderBannerEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column({ default: '' })
    @ApiProperty({ default: '' })
    url!: string;

    @ApiProperty({ enum: HeaderBannerType })
    @Column({ type: 'enum', enum: HeaderBannerType })
    bannerType!: HeaderBannerType;
}
