import HiddenProjectIcon from '@/public/icons/verified_hidden_project.svg';
import { Col } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

export const VerifiedHiddenProject = () => {
    return (
        <Col
            justifyContent={'center'}
            alignItems={'center'}
            width={'100%'}
            minHeight={'215px'}
            border={'4px solid #3BB974'}
            borderRadius={'9px'}
            gap={2}
            sx={{
                backgroundImage: 'url("/blur_trader.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <HiddenProjectIcon />

            <Box display={'flex'} bgcolor={'#3BB974'} borderRadius={'39px'} px={4.5} py={1.25}>
                <Typography fontSize={20} fontWeight={700} color="white">
                    ПРОЕКТ СКРЫТ
                </Typography>
            </Box>
        </Col>
    );
};
