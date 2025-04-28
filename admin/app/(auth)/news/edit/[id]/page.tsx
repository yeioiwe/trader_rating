import { NewsEditMain } from '@/view/news/edit/news.edit.main';

export default async function NewsEditPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;

    return <NewsEditMain id={id} />;
}
