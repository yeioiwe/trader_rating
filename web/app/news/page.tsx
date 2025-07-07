import { NewsListMain } from '@/view/news/news.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Новости - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Новости | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};

export default async function NewsListPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/list`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return <NewsListMain initialData={data} />;
}   
