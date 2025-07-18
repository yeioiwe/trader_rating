import { VerifiedProfile } from '@/view/verified_profile/verified.profile.main';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const id = (await params).id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verified/seo/${id}`);
    if (!res.ok) {
        notFound();
    }

    const data = await res.json();

    return {
        title: `${data.title}`,
        description: `${data.description}`,
    };
}

export default async function VerifiedProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return <VerifiedProfile id={id} />;
}
