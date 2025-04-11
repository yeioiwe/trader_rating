import { PostOnePage } from '@/view/post/page/post.page';

export default async function PostPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    return <PostOnePage url={url} />;
}
