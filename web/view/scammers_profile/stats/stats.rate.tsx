import RateCircle from '@/public/icons/scammer_rate_circle.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const ScammerStatsRate = ({ statsRate }: { statsRate: number }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#FFECEC'}
            border={'4px solid #C53D3D'}
            width={'100%'}
            py={1.5}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'175px'}
            px={1.5}
        >
            <Typography fontSize={isSm ? 14 : 20} color={'#C53D3D'}>
                Риск %:
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
                <Typography color="#C53D3D" fontSize={24} fontWeight={700}>
                    {rate}
                </Typography>
            </Box>
        </Box>
    );
};
