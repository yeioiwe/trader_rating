'use client';
import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { VerifiedList } from './verified.list';
import { VerifiedTitle } from './verified.title';
import dayjs from 'dayjs';

export const VerifiedMain = () => {
    const { t } = useTranslation();

    return (
        <Col gap={2.5}>
            <Col gap={1}>
                <VerifiedTitle />

                <Typography fontSize={16} color="#918C8C">
                    {t('main.updated_at', { date: dayjs().format('DD.MM.YYYY hh:mm') })}
                </Typography>
            </Col>

            <VerifiedList />
        </Col>
    );
};

//demo sort types
export interface SortType {
    id: number;
    name: string;
}

export const sortParams: SortType[] = [
    { id: 1, name: 'Весь список' },
    { id: 2, name: 'Инвестиции' },
    { id: 3, name: 'Трейдеры' },
    { id: 4, name: 'Капперы' },
    { id: 5, name: 'Крипто игры' },
];
