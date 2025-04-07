import { ScammerProfileItem } from '@/shared/config/api/api.schemas';
import { Col, Row } from '@/shared/ui/boxes';
import { ScammerStatsAbout } from './stats.about';
import { ScammerStatsProfile } from './stats.profile';
import { ScammerStatsRate } from './stats.rate';
import { ScammerStatsReports } from './stats.reports';
import { ScammerStatsRewiews } from './stats.rewiews';
import { ScammerStatsStar } from './stats.star';
import { ScammerStatsSubscribers } from './stats.subscribers';
import { StatsTop } from './stats.top';

export const ScammerStatsMain = ({ profile }: { profile: ScammerProfileItem }) => {
    return (
        <Row gap={4} justifyContent={'space-between'} alignItems={'flex-start'}>
            <ScammerStatsProfile profile={profile} />

            <Col width={'100%'} gap={2}>
                <Row justifyContent={'space-between'}>
                    <StatsTop position={profile.positionTop} />
                    <ScammerStatsRate statsRate={profile.rate} />
                </Row>

                <Row justifyContent={'space-between'}>
                    <ScammerStatsRewiews reviews={profile.reviews} />
                    <ScammerStatsStar />
                </Row>

                <Row justifyContent={'space-between'}>
                    <ScammerStatsReports reports={profile.reports} />
                    <ScammerStatsSubscribers subscribers={profile.subcribers} />
                </Row>

                <ScammerStatsAbout description={profile.shortDescription} />
            </Col>
        </Row>
    );
};
