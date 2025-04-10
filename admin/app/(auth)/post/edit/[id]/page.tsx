import { PostEditMain } from '@/view/post/edit/post.edit.main';

export default async function PostEditPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <PostEditMain id={id} />;
}
