import { ScammerDemoProfileItemCategory } from '@/shared/config/api/api.schemas';
import theme from '@/shared/config/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

const CategoryNames: Record<ScammerDemoProfileItemCategory, string> = {
    INVESTMENTS: 'Инвестиции',
    TRADER: 'Трейдеры',
    CAPPER: 'Капперы',
    GAME: 'Крипто Игры',
    CASINO: 'Казино',
    EXCHANGES: 'Крипто биржи',
    TRADING: 'Торговля',
    BROKER: 'Брокер',
    TECHNOLOGIES: 'IT-Технологии',
    WORK: 'Работа',
};

const sortParams = Object.entries(ScammerDemoProfileItemCategory).map(([key, value]) => ({
    id: value,
    name: CategoryNames[value],
}));

export const ScammersListTypeSort = ({
    sort,
    setSort,
}: {
    sort: ScammerDemoProfileItemCategory | undefined;
    setSort: Dispatch<SetStateAction<ScammerDemoProfileItemCategory | undefined>>;
}) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box width="100%" maxWidth="100%" sx={{ overflowX: 'auto', boxSizing: 'border-box' }}>
            <Row gap={isSm ? 1 : 2} width="100%" justifyContent="flex-start" sx={{ flexWrap: 'wrap' }}>
                <TypeSortButton active={sort === undefined} setSort={setSort} sort={undefined} displayName="Все" />

                {sortParams.map(s => (
                    <TypeSortButton
                        active={sort === s.id}
                        sort={s.id}
                        key={s.id}
                        setSort={setSort}
                        displayName={s.name}
                    />
                ))}
            </Row>
        </Box>
    );
};

const TypeSortButton = ({
    active,
    sort,
    setSort,
    displayName,
}: {
    active: boolean;
    sort: ScammerDemoProfileItemCategory | undefined;
    setSort: Dispatch<SetStateAction<ScammerDemoProfileItemCategory | undefined>>;
    displayName: string;
}) => {
    return (
        <Button
            onClick={() => setSort(sort)}
            sx={{ px: 3, py: 2, bgcolor: active ? '#449FE8' : '#ECF2FF', borderRadius: '9px', flex: '0 0 auto' }}
        >
            <Typography fontSize={16} fontWeight={700} color={active ? '#FFFFFF' : '#000000'}>
                {displayName}
            </Typography>
        </Button>
    );
};
