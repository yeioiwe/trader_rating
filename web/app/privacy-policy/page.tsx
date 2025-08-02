import { PolicyMain } from '@/view/policy/policy.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Пользовательское соглашение - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description:
        'Пользовательское соглашение | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
    alternates: {
        canonical: `https://anti-scamer.ru/privacy-policy`,
    },
};

export default function PolicyPage() {
    return <PolicyMain />;
}
