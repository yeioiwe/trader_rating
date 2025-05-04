import { Col } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScammersList } from './scammers.list';
import { ScammersTitle } from './scammers.title';

export const ScammersMain = () => {
    const { t } = useTranslation();
    const [sort, setSort] = useState<SortType>(sortParams[0]);

    return (
        <Col gap={2.5}>
            <Col gap={1}>
                <ScammersTitle />

                <Typography fontSize={16} color="#918C8C">
                    {t('main.updated_at', { date: dayjs().format('DD.MM.YYYY hh:mm') })}
                </Typography>
            </Col>

            {/* <ScammersTypeSort sort={sort} setSort={setSort} /> */}
            <ScammersList />
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
