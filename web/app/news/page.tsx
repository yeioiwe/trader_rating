import { NewsListMain } from '@/view/news/news.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Новости - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Новости | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};

export default function NewsListPage() {
    return <NewsListMain />;
}
