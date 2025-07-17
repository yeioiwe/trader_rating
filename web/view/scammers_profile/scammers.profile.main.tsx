'use client';
import { useScammersGetOne } from '@/shared/config/api/scammers/scammers';
import { Col } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ScammerProfileComments } from './comments/scammer.comments.main';
import { ScammerProfileList } from './scammer_list/scammer.list.main';
import { ScammersProfileOverview } from './scammers.profile.overview';
import { ScammerStatsMain } from './stats/stats.main';
import { CircularProgress } from '@mui/material';
import { CommentMain } from '../comment/comment.main';
import { CommentType } from '@/shared/config/api/api.schemas';

export const ScammerProfile = ({ id, initialData }: { id: string; initialData: any }) => {
    const router = useRouter();
    const { data: profile, isError, isLoading } = useScammersGetOne(id, initialData);

    //TODO not found page
    useEffect(() => {
        console.log(isError);
    }, [isError]);

    if (isLoading) return <ScammerProfileLoading />;
    if (profile === undefined) return null;

    return (
        <Col width={'100%'} gap={4}>
            <ScammerStatsMain profile={profile} />

            <ScammersProfileOverview id={id} />

            <CommentMain type={CommentType.SCAMMER} id={id} />

            <ScammerProfileComments id={profile.id} />

            <ScammerProfileList />
        </Col>
    );
};

const ScammerProfileLoading = () => {
    return (
        <Col width={'100%'} height={'100vh'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress />
        </Col>
    );
};
