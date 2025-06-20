import { Main } from '@/view/main/main';
import { notFound } from 'next/navigation';

export default async function MainPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scammers/top_five`);
    if (!res.ok) {
        notFound();
    }

    const scammersTopFiveInitialData = await res.json();

    return <Main scammersTopFiveInitialData={scammersTopFiveInitialData} />;
}
