import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('review')
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @ApiProperty()
    username!: string;

    @Column()
    @ApiProperty()
    userContact!: string;

    @Column('mediumtext')
    @ApiProperty()
    comment!: string;

    @Column()
    @ApiProperty()
    projectName!: string;

    @Column()
    @ApiProperty()
    projectUrl!: string;

    @Column('datetime')
    @ApiProperty({ type: Date })
    createdAt!: Date;
}
