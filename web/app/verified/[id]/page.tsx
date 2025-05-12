import { VerifiedProfile } from '@/view/verified_profile/verified.profile.main';


export default async function VerifiedProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return <VerifiedProfile id={id} />;
}
