import { NewsPostMain } from '@/view/news/news.post';
import { notFound } from 'next/navigation';

export default async function NewsPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/one/${url}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    return <NewsPostMain url={url} initialData={data} />;
}
