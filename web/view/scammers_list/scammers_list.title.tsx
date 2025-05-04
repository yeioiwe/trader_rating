import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export const ScammersListTitle = () => {
    const { t } = useTranslation();

    return (
        <Col gap={1}>
            <Typography fontSize={30} fontWeight={700}>
                Список мошенников
            </Typography>
            <Typography fontSize={16} color="#918C8C">
                Обновлено: {dayjs().format('DD.MM.YYYY hh:mm')}
            </Typography>
            <Typography fontSize={16} color="#3B3B3B">
                В мире трейдинга, особенно в сфере криптовалют, существует немало мошенников, которые обещают быструю
                прибыль, но в итоге обманывают инвесторов. Чтобы уберечь вас от финансовых потерь, мы собрали список
                недобросовестных трейдеров, подозрительных платформ и мошеннических схем.
            </Typography>
        </Col>
    );
};
