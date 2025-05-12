import RateCircle from '@/public/icons/verified_rate_circle.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const VerifiedStatsRate = ({ statsRate }: { statsRate: number }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#EDFFEC'}
            border={'4px solid #3BB974'}
            width={'100%'}
            py={1.5}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'175px'}
            px={1.5}
        >
            <Typography fontSize={isSm ? 14 : 20} color={'#3BB974'}>
                Оценка:
            </Typography>

            <Row justifyContent={'center'} height={'100%'} pt={'20px'}>
                <ScammerStatsRateItem rate={statsRate} />
            </Row>
        </Col>
    );
};

const ScammerStatsRateItem = ({ rate }: { rate: number }) => {
    return (
        <Box position={'relative'}>
            <RateCircle />

            <Box width={'100%'} position={'absolute'} top={42} display={'flex'} justifyContent={'center'}>
                <Typography color="#3BB974" fontSize={24} fontWeight={700}>
                    {rate}
                </Typography>
            </Box>
        </Box>
    );
};
