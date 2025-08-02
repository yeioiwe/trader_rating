import { NewsListMain } from '@/view/news/news.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Новости криптомошенничества и разоблачения — Anti-Scamer',
    description:
        'Актуальные новости о мошенничестве в крипте и Telegram: расследования, скандалы, разоблачения и анализ новых схем обмана.',
    alternates: {
        canonical: `https://anti-scamer.ru/news`,
    },
};

export default async function NewsListPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/list`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return <NewsListMain initialData={data} />;
}
