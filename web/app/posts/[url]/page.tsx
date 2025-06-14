import { PostOnePage } from '@/view/post/page/post.page';

export default async function PostPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/one/${url}`);
    if (!res.ok) {
        return { notFound: true };
    }

    const data = await res.json();
    return <PostOnePage url={url} initialData={data} />;
}
