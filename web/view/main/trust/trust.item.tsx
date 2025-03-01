import { Col } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export const TrustItem = ({
    sortNumber,
    description,
    icon,
}: {
    sortNumber: number;
    description: string;
    icon: ReactNode;
}) => {
    return (
        <Col
            justifyContent={'flex-start'}
            minWidth={165}
            bgcolor={'#FFFFFF'}
            borderRadius={'9px'}
            p={2}
            gap={1.75}
            position={'relative'}
        >
            <Box position={'absolute'} top={14} right={14}>
                {icon}
            </Box>

            <Typography fontWeight={700}>{sortNumber}</Typography>

            <Typography>{description}</Typography>
        </Col>
    );
};
