import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

export enum ScummerStarRate {
    STAR_1 = '1',
    STAR_2 = '2',
    STAR_3 = '3',
    STAR_4 = '4',
    STAR_5 = '5',
}

export enum ScummerCategory {
    INVESTMENTS = 'INVESTMENTS',
    TRADER = 'TRADER',
    CAPPER = 'CAPPER',
    GAME = 'GAME',
    CASINO = 'CASINO',
    EXCHANGES = 'EXCHANGES',
}

export enum ScummerVisible {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
}

@Entity('scammer')
export class ScammerEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id!: number;

    @Column()
    @Index({ unique: true })
    @ApiProperty()
    url!: string;

    @Column()
    @Index({ unique: true })
    @ApiProperty()
    name!: string;

    @Column('mediumtext')
    @ApiProperty()
    avatar_url!: string;

    @Column('mediumtext')
    @ApiProperty({ default: '{"one": "", "two": "", "three": ""}' })
    params!: string;

    @Column()
    @ApiProperty()
    positionTop!: number;

    @ApiProperty({ enum: ScummerStarRate })
    @Column({ type: 'enum', enum: ScummerStarRate })
    starRate!: ScummerStarRate;

    @Column()
    @ApiProperty()
    rate!: number;

    @Column()
    @ApiProperty()
    subcribers!: number;

    @Column()
    @ApiProperty()
    reports!: number;

    @Column()
    @ApiProperty()
    reviews!: number;

    @Column('text')
    @ApiProperty()
    shortDescription!: string;

    @Column()
    @ApiProperty()
    tgUsername!: string;

    @ApiProperty({ enum: ScummerVisible, default: ScummerVisible.VISIBLE })
    @Column({ type: 'enum', enum: ScummerVisible, default: ScummerVisible.VISIBLE })
    visible!: ScummerVisible;

    @ApiProperty({ enum: ScummerCategory })
    @Column({ type: 'enum', enum: ScummerCategory })
    category!: ScummerCategory;

    @Column('datetime')
    @ApiProperty({ type: Date })
    createdAt!: Date;

    @Column('datetime')
    @ApiProperty({ type: Date })
    reviewDate!: Date;

    @Column()
    @ApiProperty()
    profileLikes!: number;

    @Column()
    @ApiProperty()
    profileViews!: number;

    @Column('mediumtext')
    @ApiProperty()
    about!: string;

    @Column('boolean')
    @ApiProperty({ type: 'boolean', default: false })
    notification!: boolean;

    @Column('varchar', {
        length: 255,
        default: 'Трейдеры мошенники - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    })
    @ApiProperty()
    title!: string;

    @Column('varchar', {
        length: 255,
        default:
            'Трейдеры мошенники | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
    })
    @ApiProperty()
    description!: string;
}
