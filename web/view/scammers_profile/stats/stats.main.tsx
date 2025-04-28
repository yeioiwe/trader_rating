'use client';
import { ScammerProfileItem } from '@/shared/config/api/api.schemas';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, useMediaQuery } from '@mui/material';
import { ScammerStatsAbout } from './stats.about';
import { ScammerStatsProfile } from './stats.profile';
import { ScammerStatsRate } from './stats.rate';
import { ScammerStatsReports } from './stats.reports';
import { ScammerStatsRewiews } from './stats.rewiews';
import { ScammerStatsStar } from './stats.star';
import { ScammerStatsSubscribers } from './stats.subscribers';
import { StatsTop } from './stats.top';

export const ScammerStatsMain = ({ profile }: { profile: ScammerProfileItem }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            display={'flex'}
            flexDirection={isSm ? 'column' : 'row'}
            gap={4}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
        >
            <ScammerStatsProfile profile={profile} />

            <Col width={'100%'} gap={isSm ? 0.5 : 2}>
                <Row justifyContent={'space-between'} gap={isSm ? 0.5 : 2}>
                    <StatsTop position={profile.positionTop} />
                    <ScammerStatsRate statsRate={profile.rate} />
                </Row>

                <Row justifyContent={'space-between'} gap={isSm ? 0.5 : 2}>
                    <ScammerStatsRewiews reviews={profile.reviews} />
                    <ScammerStatsStar />
                </Row>

                <Row justifyContent={'space-between'} gap={isSm ? 0.5 : 2}>
                    <ScammerStatsReports reports={profile.reports} />
                    <ScammerStatsSubscribers subscribers={profile.subcribers} />
                </Row>

                <ScammerStatsAbout description={profile.shortDescription} />
            </Col>
        </Box>
    );
};
