import { VerifiedEditMain } from '@/view/verified/edit/verified.edit.main';

export default async function VerifiedEditPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <VerifiedEditMain id={id} />;
}
