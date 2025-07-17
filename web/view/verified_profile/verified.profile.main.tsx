'use client';

import { Col } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { VerifiedStatsMain } from './stats/stats.main';
import { useVerifiedGetOne } from '@/shared/config/api/verified/verified';
import { VerifiedProfileOverview } from './verified.profile.overview';
import { VerifiedProfileComments } from './comments/verified.comments.main';
import { VerifiedProfileList } from './scammer_list/verified.list.main';
import { CircularProgress, Skeleton } from '@mui/material';
import { CommentMain } from '../comment/comment.main';

export const VerifiedProfile = ({ id }: { id: string }) => {
    const router = useRouter();
    const { data: profile, isError, isLoading } = useVerifiedGetOne(id);

    //TODO not found page
    useEffect(() => {
        console.log(isError);
    }, [isError]);

    if (isLoading) return <VerifiedProfileLoading />;
    if (profile === undefined) return null;

    return (
        <Col width={'100%'} gap={4}>
            <VerifiedStatsMain profile={profile} />

            <VerifiedProfileOverview id={id} />

            <CommentMain id={profile.url} type="VERIFIED" />

            <VerifiedProfileComments id={profile.id} />

            <VerifiedProfileList />
        </Col>
    );
};

const VerifiedProfileLoading = () => {
    return (
        <Col width={'100%'} height={'100vh'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress />
        </Col>
    );
};
