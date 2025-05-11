import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum LawyerProfileVisible {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
}

@Entity('lawyer_profile')
export class LawyerProfileEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column('mediumtext')
    @ApiProperty()
    profile!: string;

    @ApiProperty({ enum: LawyerProfileVisible, default: LawyerProfileVisible.HIDDEN })
    @Column({ type: 'enum', enum: LawyerProfileVisible, default: LawyerProfileVisible.HIDDEN })
    visible!: LawyerProfileVisible;
}
