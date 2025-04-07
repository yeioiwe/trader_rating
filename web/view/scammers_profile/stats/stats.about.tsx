import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const ScammerStatsAbout = ({ description }: { description: string }) => {
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#FFECEC'}
            border={'4px solid #C53D3D'}
            width={'100%'}
            py={1.5}
            borderRadius={'14px'}
            position={'relative'}
            px={1.5}
        >
            <Typography fontSize={20} color={'#C53D3D'}>
                О проекте:
            </Typography>

            <Typography fontSize={16}>{description}</Typography>
        </Col>
    );
};
