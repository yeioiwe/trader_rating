import { PostListMain } from '@/view/post/post.list.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Блог - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Блог | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};


export default async function PostListPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return <PostListMain initialData={data} />;
}   
