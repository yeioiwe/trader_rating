import TopIcon from '@/public/icons/scammer_top_icon.svg';
import { Col } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

export const StatsTop = ({ position }: { position: number }) => {
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
            <Typography fontSize={20} color={'#C53D3D'}>
                Место мошенника:
            </Typography>

            <Box position={'absolute'} top={45} left={45}>
                <TopIcon />
            </Box>

            <Box position={'absolute'} top={66} left={'46%'}>
                <Typography color="#C53D3D" fontSize={32} fontWeight={700}>
                    {position}
                </Typography>
            </Box>
        </Col>
    );
};
