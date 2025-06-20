import { ScammersListMain } from '@/view/scammers_list/scammers_list.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Трейдеры мошенники - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Трейдеры мошенники | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};

export default function ScammersPage() {
    return <ScammersListMain />;
}
