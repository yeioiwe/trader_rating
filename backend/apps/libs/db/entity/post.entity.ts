import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

    @Column('varchar', {
        length: 255,
        default: 'Блог - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    })
    @ApiProperty()
    seo_title!: string;

    @Column('varchar', {
        length: 255,
        default:
            'Блог | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
    })
    @ApiProperty()
    seo_description!: string;

    @UpdateDateColumn({ type: 'timestamp' })
    @ApiProperty({ type: Date })
    lastmod!: Date;
}
