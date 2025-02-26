import YoutubeLogo from '@/public/icons/youtube.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const HederYoutubeBanner = () => {
    const { t } = useTranslation();
    return (
        <Row
            width={537}
            height={100}
            bgcolor={'#c53d3d'}
            borderRadius={'8px'}
            justifyContent={'space-between'}
            px={3.25}
            py={1.25}
            sx={{
                cursor: 'pointer',
            }}
        >
            <YoutubeLogo />
            <Col color={'#ffff'} sx={{ textAlign: 'end' }}>
                <Typography fontSize={20} fontWeight={700}>
                    {t('header.youtubeBanner.title_1')}
                </Typography>
                <Typography fontSize={20} fontWeight={700}>
                    {t('header.youtubeBanner.title_2')}
                </Typography>
                <Typography fontSize={16}> {t('header.youtubeBanner.description')}</Typography>
            </Col>
        </Row>
    );
};

export const LawyerBanner = () => {
    const { t } = useTranslation();
    return (
        <Row
            width={537}
            height={100}
            bgcolor={'#449FE8'}
            borderRadius={'8px'}
            justifyContent={'space-between'}
            px={3.25}
            py={1.25}
            sx={{
                cursor: 'pointer',
            }}
        >
            <YoutubeLogo />
            <Col color={'#ffff'} sx={{ textAlign: 'end' }}>
                <Typography fontSize={20} fontWeight={700}>
                    {t('header.lawyerBanner.title_1')}
                </Typography>
                <Typography fontSize={20} fontWeight={700}>
                    ОБРАТИТЕСЬ К НАШЕМУ ЮРИСТУ
                </Typography>
                <Typography fontSize={16}>для возврата украденных средств</Typography>
            </Col>
        </Row>
    );
};
