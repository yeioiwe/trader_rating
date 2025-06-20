import { PostListMain } from '@/view/post/post.list.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Блог - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Блог | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};


export default function PostListPage() {
    return <PostListMain />;
}
