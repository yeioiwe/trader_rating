'use client';
import { VerifiedProfileItem } from '@/shared/config/api/api.schemas';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, useMediaQuery } from '@mui/material';
import { VerifiedStatsAbout } from './stats.about';
import { VerifiedStatsProfile } from './stats.profile';
import { VerifiedStatsRate } from './stats.rate';
import { VerifiedStatsRewiews } from './stats.rewiews';
import { VerifiedStatsStar } from './stats.star';
import { VerifiedStatsSubscribers } from './stats.subscribers';
import { StatsTop } from './stats.top';
import { VerifiedStatsProfit } from './stats.profit';

export const VerifiedStatsMain = ({ profile }: { profile: VerifiedProfileItem }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            display={'flex'}
            flexDirection={isSm ? 'column' : 'row'}
            gap={4}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
        >
            <VerifiedStatsProfile profile={profile} />

            <Col width={'100%'} gap={isSm ? 0.5 : 2}>
                <Row justifyContent={'space-between'} gap={isSm ? 0.5 : 2}>
                    <StatsTop position={profile.positionTop} />
                    <VerifiedStatsRate statsRate={profile.rate} />
                </Row>

                <Row justifyContent={'space-between'} gap={isSm ? 0.5 : 2}>
                    <VerifiedStatsRewiews reviews={profile.reviews} />
                    <VerifiedStatsStar />
                </Row>

                <Row justifyContent={'space-between'} gap={isSm ? 0.5 : 2}>
                    <VerifiedStatsProfit profit={profile.profit} />
                    <VerifiedStatsSubscribers subscribers={profile.subcribers} />
                </Row>

                <VerifiedStatsAbout description={profile.shortDescription} />
            </Col>
        </Box>
    );
};
