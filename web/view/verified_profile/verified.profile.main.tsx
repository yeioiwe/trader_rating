'use client';

import { Col } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { VerifiedStatsMain } from './stats/stats.main';
import { useVerifiedGetOne } from '@/shared/config/api/verified/verified';
import { VerifiedProfileOverview } from './verified.profile.overview';
import { VerifiedProfileComments } from './comments/verified.comments.main';
import { VerifiedProfileList } from './scammer_list/verified.list.main';

export const VerifiedProfile = ({ id }: { id: string }) => {
    const router = useRouter();
    const { data: profile, isError } = useVerifiedGetOne(id);

    //TODO not found page
    useEffect(() => {
        console.log(isError);
    }, [isError]);

    
    if (profile === undefined) return null;
    
    return (
        <Col width={'100%'} gap={4}>
            <VerifiedStatsMain profile={profile} />

            <VerifiedProfileOverview id={id} />

            <VerifiedProfileComments id={profile.id} />

            <VerifiedProfileList /> 
        </Col>
    );
};
