import RateCircle from '@/public/icons/scammer_rate_circle.svg';
import { Col } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

export const ScammerStatsRate = ({ statsRate }: { statsRate: number }) => {
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#FFECEC'}
            border={'4px solid #C53D3D'}
            minWidth={'218px'}
            py={1.5}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'175px'}
            px={1.5}
        >
            <Typography fontSize={20} color={'#C53D3D'}>
                Оценка:
            </Typography>

            <Box position={'absolute'} top={75} left={33}>
                <RateCircle />
            </Box>

            <Box position={'absolute'} top={118} left={'40%'}>
                <Typography color="#C53D3D" fontSize={24} fontWeight={700}>
                    {statsRate}%
                </Typography>
            </Box>
        </Col>
    );
};
