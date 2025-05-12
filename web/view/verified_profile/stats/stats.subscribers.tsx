import SubscribersIcon from '@/public/icons/verif_subscribers_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';

export const VerifiedStatsSubscribers = ({ subscribers }: { subscribers: number }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#EDFFEC'}
            border={'4px solid #3BB974'}
            width={'100%'}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'100px'}
            px={1.5}
            pt={0.5}
        >
            <Typography fontSize={20} color={'#3BB974'}>
                Подписчики:
            </Typography>

            <Row justifyContent={'space-between'}>
                <SubscribersIcon />

                <Typography fontSize={isSm ? 30 : 48} fontWeight={700} color={'#3BB974'}>
                    {subscribers}
                </Typography>
            </Row>
        </Col>
    );
};
