import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

    @Column('varchar', {
        length: 255,
        default: 'Новости - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    })
    @ApiProperty()
    seo_title!: string;

    @Column('varchar', {
        length: 255,
        default:
            'Новости | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
    })
    @ApiProperty()
    seo_description!: string;

    @UpdateDateColumn({ type: 'timestamp' })
    @ApiProperty({ type: Date })
    lastmod!: Date;
}
