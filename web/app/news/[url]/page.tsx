import { NewsPostMain } from '@/view/news/news.post';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ url: string }> }): Promise<Metadata> {
    const id = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/seo/${id}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return {
        title: `${data.title}`,
        description: `${data.description}`,
    };
}

export default async function NewsPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/one/${url}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    return <NewsPostMain url={url} initialData={data} />;
}
