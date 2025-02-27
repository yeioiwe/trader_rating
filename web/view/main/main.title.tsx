import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const MainPageTitle = () => {
    const { t } = useTranslation();

    return (
        <Col gap={1}>
            <Typography fontSize={30} fontWeight={700}>
                {t('main.title')}
            </Typography>
            <Typography fontSize={16} color="#918C8C">
                {t('main.updated_at', { date: '21 Янв, 08:42' })}
            </Typography>
            <Typography fontSize={16} color="#3B3B3B">
                {t('main.description')}
            </Typography>
        </Col>
    );
};
