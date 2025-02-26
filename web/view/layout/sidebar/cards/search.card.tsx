import SearchIcon from '@/public/icons/layout_search.svg';
import { Col } from '@/shared/ui/boxes';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const SearchCard = () => {
    const { t } = useTranslation();

    return (
        <Col bgcolor={'#ECF2FF'} borderRadius={'19px'} p={2} gap={1.5}>
            <Typography fontSize={20} fontWeight={700}>
                {t('sidebar.search.title')}
            </Typography>

            <FormControl>
                <InputLabel>{t('sidebar.search.placeholder')}</InputLabel>

                <OutlinedInput
                    sx={{ borderRadius: '9px' }}
                    label={t('sidebar.search.placeholder')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Col>
    );
};
