import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

export enum VerifiedStarRate {
    STAR_1 = '1',
    STAR_2 = '2',
    STAR_3 = '3',
    STAR_4 = '4',
    STAR_5 = '5',
}

export enum VerifiedCategory {
    INVESTMENTS = 'INVESTMENTS',
    TRADER = 'TRADER',
    CAPPER = 'CAPPER',
    GAME = 'GAME',
    CASINO = 'CASINO',
    EXCHANGES = 'EXCHANGES',
    TRADING = 'TRADING',
    BROKER = 'BROKER',
    TECHNOLOGIES = 'TECHNOLOGIES',
    WORK = 'WORK',
}

export enum VerifiedVisible {
    VISIBLE = 'VISIBLE',
    HIDDEN = 'HIDDEN',
}

@Entity('verified')
export class VerifiedEntity {
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

    @ApiProperty({ enum: VerifiedStarRate })
    @Column({ type: 'enum', enum: VerifiedStarRate })
    starRate!: VerifiedStarRate;

    @Column()
    @ApiProperty()
    rate!: number;

    @Column()
    @ApiProperty()
    subcribers!: number;

    @Column()
    @ApiProperty()
    profit!: number;

    @Column()
    @ApiProperty()
    reviews!: number;

    @Column('text')
    @ApiProperty()
    shortDescription!: string;

    @Column()
    @ApiProperty()
    tgUsername!: string;

    @ApiProperty({ enum: VerifiedVisible, default: VerifiedVisible.VISIBLE })
    @Column({ type: 'enum', enum: VerifiedVisible, default: VerifiedVisible.VISIBLE })
    visible!: VerifiedVisible;

    @ApiProperty({ enum: VerifiedCategory })
    @Column({ type: 'enum', enum: VerifiedCategory })
    category!: VerifiedCategory;

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
        default: 'Рейтинг проверенных трейдеров - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    })
    @ApiProperty()
    title!: string;

    @Column('varchar', {
        length: 255,
        default:
            'Рейтинг проверенных трейдеров | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
    })
    @ApiProperty()
    description!: string;
}
