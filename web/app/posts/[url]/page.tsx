import { PostOnePage } from '@/view/post/page/post.page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ url: string }> }): Promise<Metadata> {
    const id = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/seo/${id}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return {
        title: `${data.title}`,
        description: `${data.description}`,
        alternates: {
            canonical: `https://anti-scamer.ru/posts/${id}`,
        },
    };
}

export default async function PostPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/one/${url}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    return <PostOnePage url={url} initialData={data} />;
}
