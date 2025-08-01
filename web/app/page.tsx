import { Main } from '@/view/main/main';
import { notFound } from 'next/navigation';

export default async function MainPage() {
    const scammersRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scammers/top_five`);
    if (!scammersRes.ok) {
        notFound();
    }

    const scammersTopFiveInitialData = await scammersRes.json();

    const verifiedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verified/top_five`);
    if (!verifiedRes.ok) {
        notFound();
    }

    const verifiedTopFiveInitialData = await verifiedRes.json();

    return (
        <Main
            scammersTopFiveInitialData={scammersTopFiveInitialData}
            verifiedTopFiveInitialData={verifiedTopFiveInitialData}
        />
    );
}
