import { ScammerProfile } from '@/view/scammers_profile/scammers.profile.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Трейдеры мошенники - отзывы, проверки, новости и топ-прогнозы от ANTI SCAMER',
    description: 'Трейдеры мошенники | Честные отзывы, рейтинги и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров | ТОП проверенных трейдеров от ANTI SCAMER',
};

export default async function ScammerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scammers/project/${id}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    return <ScammerProfile id={id} initialData={data} />;
}
