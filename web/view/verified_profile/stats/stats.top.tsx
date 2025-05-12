import TopIcon from '@/public/icons/verified_top_position.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const StatsTop = ({ position }: { position: number }) => {
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
                Место мошенника:
            </Typography>

            <Row justifyContent={'center'}>
                <StatsTopLogo position={position} />
            </Row>
        </Col>
    );
};

const StatsTopLogo = ({ position }: { position: number }) => {
    return (
        <Box position={'relative'}>
            <TopIcon />

            <Box width={'100%'} position={'absolute'} top={21} display={'flex'} justifyContent={'center'}>
                <Typography color="#3BB974" fontSize={32} fontWeight={700}>
                    {position}
                </Typography>
            </Box>
        </Box>
    );
};
