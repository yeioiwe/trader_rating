import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    login!: string;

    @Column()
    @ApiProperty()
    password!: string;

    @Column({ default: false })
    @ApiProperty({ type: Boolean, default: false })
    root!: boolean;
}
