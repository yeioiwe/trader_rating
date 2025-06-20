import { VerifiedProfile } from '@/view/verified_profile/verified.profile.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Рейтинг проверенных трейдеров - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Рейтинг проверенных трейдеров | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};


export default async function VerifiedProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return <VerifiedProfile id={id} />;
}
