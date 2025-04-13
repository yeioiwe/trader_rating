import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lawyer_banner')
export class LawyerBannerEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    tgUrl!: string;

    @Column()
    @ApiProperty()
    detailsUrl!: string;
}
