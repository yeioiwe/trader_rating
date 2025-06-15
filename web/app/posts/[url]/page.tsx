import { PostOnePage } from '@/view/post/page/post.page';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/one/${url}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    return <PostOnePage url={url} initialData={data} />;
}
