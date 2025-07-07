import { ScammersListMain } from '@/view/scammers_list/scammers_list.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Трейдеры мошенники - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Трейдеры мошенники | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};

export default async function ScammersPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scammers/list`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return <ScammersListMain initialData={data} />;
}
