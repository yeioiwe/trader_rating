import { PostListMain } from '@/view/post/post.list.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Отзывы жертв и разоблачения мошенников — Anti-Scamer',
    description:
        'Реальные истории пострадавших от крипто-скамов: отзывы о проектах и трейдерах, доказательства обмана и рекомендации, как не повторить ошибку.',
    alternates: {
        canonical: `https://anti-scamer.ru/posts`,
    },
};

export default async function PostListPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return <PostListMain initialData={data} />;
}
