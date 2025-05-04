import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export const VerifiedListTitle = () => {
    const { t } = useTranslation();

    return (
        <Col gap={1}>
            <Typography fontSize={30} fontWeight={700}>
                Рейтинг провервенных трейдеров
            </Typography>
            <Typography fontSize={16} color="#918C8C">
                Обновлено: {dayjs().format('DD.MM.YYYY hh:mm')}
            </Typography>
            <Typography fontSize={16} color="#3B3B3B">
                Хотите уверенно инвестировать в криптовалюту и следить за лучшими трейдерами? Мы собрали топ самых
                опытных и надежных криптовалютных трейдеров. Лучшие трейдеры – с высокими результатами, проверенными
                стратегиями и положительными отзывами. Оценки экспертов и реальных пользователей – объективная
                информация без рекламы.
            </Typography>
        </Col>
    );
};
