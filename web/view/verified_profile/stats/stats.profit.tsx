'use client';
import ProfitIcon from '@/public/icons/verif_profit_stat_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';

export const VerifiedStatsProfit = ({ profit }: { profit: number }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#EDFFEC'}
            border={'4px solid #3BB974'}
            width={'100%'}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'100px'}
            px={1.5}
            pt={0.5}
        >
            <Typography fontSize={20} color={'#3BB974'}>
                Профит %:
            </Typography>

            <Row justifyContent={'space-between'}>
                <ProfitIcon />

                <Typography fontSize={isSm ? 30 : 48} fontWeight={700} color={'#3BB974'}>
                    {profit}
                </Typography>
            </Row>
        </Col>
    );
};
