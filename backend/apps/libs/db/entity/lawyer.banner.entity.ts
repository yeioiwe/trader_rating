import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lawyer_banner')
export class LawyerBannerEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    name!: string;

    @Column()
    @ApiProperty()
    title!: string;

    @Column('mediumtext')
    @ApiProperty()
    avatar!: string;

    @Column('mediumtext')
    @ApiProperty()
    description!: string;

    @Column()
    @ApiProperty()
    reviews!: number;

    @Column()
    @ApiProperty()
    reports!: number;

    @Column()
    @ApiProperty()
    tgUrl!: string;

    @Column()
    @ApiProperty()
    detailsUrl!: string;
}
