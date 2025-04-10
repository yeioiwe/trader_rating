import { ScammerEditMain } from '@/view/scammers/edit/scammers.edit.main';

export default async function ScammersEditPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <ScammerEditMain id={id} />;
}
