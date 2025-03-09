import theme from '@/shared/config/theme/theme';
import { Box, useMediaQuery } from '@mui/material';
import { LaweyrAbout } from './lawyer.about';
import { LawyerAvatar } from './lawyer.avatar';
import { LaweyrMobileAbout } from './mobile/lawyer.mobile.about';

export const LawyerCard = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            flexDirection={isSm ? 'column' : 'row'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            gap={4}
            pl={isSm ? 2 : 6.75}
            pr={isSm ? 2 : 2.75}
            py={3.5}
            borderRadius={'19px'}
            sx={{ background: 'linear-gradient(240deg, #4F7289 -17.16%, #42A5F5 90.48%)' }}
        >
            <LawyerAvatar />

            {isSm ? <LaweyrMobileAbout /> : <LaweyrAbout />}
        </Box>
    );
};
