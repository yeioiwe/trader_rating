'use client';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { DashboardFooterStrip } from './dashboard.footer_strip';
import { DashboardHeaderBanner } from './dashboard.header_banner';
import { DashboardImagesBanner } from './dashboard.images_banner';
import { DashboardImagesBannerList } from './dashboard.images_banner.list';
import { DashboardLawyerBanner } from './dashboard.lawyer_banner';
import { DashboardYoutubeLayout } from './dashboard.youtube_layout';

export const DashboardMain = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Col width={'100%'} gap={4}>
            <Row gap={2} justifyContent={'flex-start'}>
                <Typography fontSize={21} fontWeight={700}>
                    Реадктирование главной страницы
                </Typography>
            </Row>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Баннер" {...a11yProps(0)} />
                        <Tab label="Юрист" {...a11yProps(1)} />
                        <Tab label="Layout" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Col width={'100%'} gap={2}>
                        <DashboardHeaderBanner />

                        <Divider variant="middle" />
                        <DashboardImagesBanner />
                        <DashboardImagesBannerList />
                    </Col>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <Col width={'100%'} gap={2}>
                        <DashboardLawyerBanner />
                    </Col>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                    <Col width={'100%'} gap={2}>
                        <DashboardYoutubeLayout />

                        <DashboardFooterStrip />
                    </Col>
                </CustomTabPanel>
            </Box>
        </Col>
    );
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
