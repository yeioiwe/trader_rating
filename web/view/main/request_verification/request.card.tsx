import CheckIcon from '@/public/icons/layout_check.svg';
import RequestButtonIcon from '@/public/icons/request_button_arrow.svg';
import BackgroundIcon from '@/public/icons/request_card_background.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const RequestVerificationCard = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <Col px={3} py={4} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={3} position={'relative'}>
            <Box position={'absolute'} top={10} right={20}>
                <BackgroundIcon />
            </Box>

            <Col gap={1.5}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <CheckIcon />

                    <Typography fontSize={isSm ? 16 : 20} fontWeight={700}>
                        {t('main.requestVerification.title')}
                    </Typography>
                </Row>

                <Typography fontSize={20}>{t('main.requestVerification.description')}</Typography>
            </Col>

            <Row justifyContent={'flex-end'}>
                <RequestButton />
            </Row>
        </Col>
    );
};

const RequestButton = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <Button sx={{ bgcolor: '#3BB974', borderRadius: '9px', minWidth: isSm ? '100%' : 270, minHeight: 50 }}>
            <Row gap={2}>
                <Typography fontSize={20} fontWeight={700} color="white">
                    {t('main.requestVerification.button_send_request')}
                </Typography>

                <RequestButtonIcon />
            </Row>
        </Button>
    );
};
