import TopIcon from '@/public/icons/scammer_top_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';

export const StatsTop = ({ position }: { position: number }) => {
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
                <Typography color="#C53D3D" fontSize={32} fontWeight={700}>
                    {position}
                </Typography>
            </Box>
        </Box>
    );
};
