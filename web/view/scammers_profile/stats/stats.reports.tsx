'use client';
import ReportsIcon from '@/public/icons/scammer_reports_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';

export const ScammerStatsReports = ({ reports }: { reports: number }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#FFECEC'}
            border={'4px solid #C53D3D'}
            width={'100%'}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'100px'}
            px={1.5}
            pt={0.5}
        >
            <Typography fontSize={20} color={'#C53D3D'}>
                Жалобы:
            </Typography>

            <Row justifyContent={'space-between'}>
                <ReportsIcon />

                <Typography fontSize={isSm ? 30 : 48} fontWeight={700} color={'#C53D3D'}>
                    {reports}
                </Typography>
            </Row>
        </Col>
    );
};
