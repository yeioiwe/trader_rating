import TrustIcon from '@/public/icons/trust_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const TrustTitle = () => {
    const { t } = useTranslation();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col>
            <Row gap={2} justifyContent={'flex-start'}>
                <TrustIcon />

                <Typography fontSize={isSm ? 16 : 24} fontWeight={700}>
                    Почему доверяют нашему рейтингу?
                </Typography>
            </Row>

            <Typography fontSize={16} fontWeight={300} color={'#918C8C'}>
                Сравните эти 4 пункта с другими рейтингами и поймете, чем мы отличаемся.
            </Typography>
        </Col>
    );
};
