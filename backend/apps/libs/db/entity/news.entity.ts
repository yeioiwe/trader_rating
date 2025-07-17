import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
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
    avatar!: string;

    @Column('mediumtext')
    @ApiProperty()
    news!: string;

    @Column()
    @ApiProperty()
    likes!: number;

    @Column()
    @ApiProperty()
    views!: number;

    @Column('datetime')
    @ApiProperty({ type: Date })
    date!: Date;

    @Column('boolean')
    @ApiProperty({ type: 'boolean', default: false })
    notification!: boolean;
}
