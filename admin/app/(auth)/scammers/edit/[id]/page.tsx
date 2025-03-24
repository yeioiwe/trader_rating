import { ScammersEdit } from '@/view/scammers/edit/scammers.edit';

export default async function ScammersEditPage({ params }: { params: Promise<{ id: number }> }) {
    const id = (await params).id;
    return <ScammersEdit id={id} />;
}
