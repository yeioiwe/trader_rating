'use client';
import { useScammersGetOne } from '@/shared/config/api/scammers/scammers';
import { Col } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ScammerStatsMain } from './stats/stats.main';

export const ScammerProfile = ({ id }: { id: string }) => {
    const router = useRouter();
    const { data: profile, isError } = useScammersGetOne(id);

    //TODO not found page
    useEffect(() => {
        console.log(isError);
    }, [isError]);

    if (profile === undefined) return null;

    return (
        <Col>
            <ScammerStatsMain />
        </Col>
    );
};
