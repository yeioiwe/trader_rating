import { ScammerProfile } from '@/view/scammers_profile/scammers.profile.main';

export default async function ScammerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return <ScammerProfile id={id} />;
}
