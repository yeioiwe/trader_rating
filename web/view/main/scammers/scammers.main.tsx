import { Col } from '@/shared/ui/boxes';
import { useState } from 'react';
import { ScammersList } from './scammers.list';
import { ScammersTypeSort } from './scammers.sort';
import { ScammersTitle } from './scammers.title';

export const ScammersMain = () => {
    const [sort, setSort] = useState<SortType>(sortParams[0]);

    return (
        <Col gap={2.5}>
            <ScammersTitle />
            <ScammersTypeSort sort={sort} setSort={setSort} />
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
