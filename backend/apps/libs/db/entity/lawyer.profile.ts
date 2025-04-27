import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lawyer_profile')
export class LawyerProfileEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column('mediumtext')
    @ApiProperty()
    profile!: string;
}
