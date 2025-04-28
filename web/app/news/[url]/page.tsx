import { NewsPostMain } from '@/view/news/news.post';

export default async function NewsPage({ params }: { params: Promise<{ url: string }> }) {
    const url = (await params).url;

    return <NewsPostMain url={url} />;
}
