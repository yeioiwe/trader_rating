import theme from '@/shared/config/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { sortParams, SortType } from './scammers.main';

export const ScammersTypeSort = ({
    sort,
    setSort,
}: {
    sort: SortType;
    setSort: Dispatch<SetStateAction<SortType>>;
}) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box width={'100%'} sx={{ overflowX: 'auto' }}>
            <Row gap={isSm ? 1 : 2} width={'100%'} justifyContent={'flex-start'}>
                {sortParams.map((s, i) => (
                    <TypeSortButton active={sort.id === s.id} sort={s} key={i} setSort={setSort} />
                ))}
            </Row>
        </Box>
    );
};

const TypeSortButton = ({
    active,
    sort,
    setSort,
}: {
    active: boolean;
    sort: SortType;
    setSort: Dispatch<SetStateAction<SortType>>;
}) => {
    return (
        <Button
            onClick={() => setSort(sort)}
            sx={{ px: 3, py: 2, bgcolor: active ? '#449FE8' : '#ECF2FF', borderRadius: '9px', flex: '0 0 auto' }}
        >
            <Typography fontSize={16} fontWeight={700} color={active ? '#FFFFFF' : '#000000'}>
                {sort.name}
            </Typography>
        </Button>
    );
};
