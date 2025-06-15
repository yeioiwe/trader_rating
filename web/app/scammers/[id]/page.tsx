import { ScammerProfile } from '@/view/scammers_profile/scammers.profile.main';
import { notFound } from 'next/navigation';

export default async function ScammerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scammers/project/${id}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    return <ScammerProfile id={id} initialData={data} />;
}
