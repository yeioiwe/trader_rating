import { Col, Row } from '@/shared/ui/boxes';

import { Divider, Typography } from '@mui/material';
import { DashboardHeaderBanner } from './dashboard.header_banner';
import { DashboardImagesBanner } from './dashboard.images_banner';
import { DashboardImagesBannerList } from './dashboard.images_banner.list';
import { DashboardLawyerBanner } from './dashboard.lawyer_banner';
import { DashboardYoutubeLayout } from './dashboard.youtube_layout';

export const DashboardMain = () => {
    return (
        <Col width={'100%'} gap={2}>
            <Row gap={2} justifyContent={'flex-start'}>
                <Typography fontSize={21} fontWeight={700}>
                    Реадктирование главной страницы
                </Typography>
            </Row>

            <DashboardHeaderBanner />

            <Divider variant="middle" />
            <DashboardImagesBanner />
            <DashboardImagesBannerList />

            <Divider variant="middle" />
            <DashboardLawyerBanner />

            <Divider variant="middle" />
            <DashboardYoutubeLayout />
        </Col>
    );
};
