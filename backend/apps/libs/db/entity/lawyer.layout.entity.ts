import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum LawyerLayoutVisible {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
}

@Entity('lawyer_layout')
export class LawyerLayoutEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @ApiProperty({ enum: LawyerLayoutVisible, default: LawyerLayoutVisible.VISIBLE })
    @Column({ type: 'enum', enum: LawyerLayoutVisible, default: LawyerLayoutVisible.VISIBLE })
    visible!: LawyerLayoutVisible;

    @Column()
    @ApiProperty()
    name!: string;

    @Column('mediumtext')
    @ApiProperty()
    description!: string;

    @Column('mediumtext')
    @ApiProperty()
    avatar!: string;

    @Column()
    @ApiProperty()
    tgUrl!: string;

    @Column()
    @ApiProperty()
    detailsUrl!: string;
}
