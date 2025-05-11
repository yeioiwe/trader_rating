import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum LawyerBannerVisible {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
}

@Entity('lawyer_banner')
export class LawyerBannerEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @ApiProperty({ enum: LawyerBannerVisible, default: LawyerBannerVisible.HIDDEN })
    @Column({ type: 'enum', enum: LawyerBannerVisible, default: LawyerBannerVisible.HIDDEN })
    visible!: LawyerBannerVisible;

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
