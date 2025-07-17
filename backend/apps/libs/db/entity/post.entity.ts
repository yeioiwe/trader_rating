import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @Index({ unique: true })
    @ApiProperty()
    url!: string;

    @Column('text')
    @ApiProperty()
    title!: string;

    @Column('mediumtext')
    @ApiProperty()
    post!: string;

    @Column()
    @ApiProperty()
    likes!: number;

    @Column()
    @ApiProperty()
    views!: number;

    @Column()
    @ApiProperty()
    readTime!: number;

    @Column('datetime')
    @ApiProperty({ type: Date })
    date!: Date;

    @Column('boolean')
    @ApiProperty({ type: 'boolean', default: false })
    notification!: boolean;
}
