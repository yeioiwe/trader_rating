import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const VerifiedStatsAbout = ({ description }: { description: string }) => {
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#EDFFEC'}
            border={'4px solid #3BB974'}
            width={'100%'}
            py={1.5}
            borderRadius={'14px'}
            position={'relative'}
            px={1.5}
        >
            <Typography fontSize={20} color={'#3BB974'}>
                О проекте:
            </Typography>

            <Typography fontSize={16}>{description}</Typography>
        </Col>
    );
};
