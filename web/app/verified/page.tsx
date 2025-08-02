import { VerifiedListMain } from '@/view/verified_list/verified_list.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Рейтинг проверенных трейдеров - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description:
        'Рейтинг проверенных трейдеров | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
    alternates: {
        canonical: `https://anti-scamer.ru/verified`,
    },
};

export default function VerifiedPage() {
    return <VerifiedListMain />;
}
