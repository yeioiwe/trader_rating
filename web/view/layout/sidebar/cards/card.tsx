import { Box } from '@mui/material';
import { ReactNode } from 'react';

export const SidebarCard = ({ children, bgcolor, icon }: { children: ReactNode; bgcolor: string; icon: ReactNode }) => {
    return (
        <Box px={2} pb={2} borderRadius={'19px'} width={378} bgcolor={bgcolor}>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                top={'-21px'}
                left={'44%'}
                position={'relative'}
                width={42}
                height={42}
                bgcolor={bgcolor}
            >
                {icon}
            </Box>

            <Box marginTop={'-15px'}>{children}</Box>
        </Box>
    );
};
