'use client';
import { usePagesGetSaerchList } from '@/shared/config/api/pages/pages';
import { Col } from '@/shared/ui/boxes';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SearchCard = () => {
    const { t } = useTranslation();
    const { data: searchList } = usePagesGetSaerchList();

    const [inputValue, setInputValue] = useState('');
    const [focused, setFocused] = useState(false);

    const filteredOptions = useMemo(() => {
        if (inputValue.length < 3) return [];
        return searchList?.items.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    }, [inputValue]);

    const handleSelect = (event: any, value: any) => {
        if (value?.url) {
            window.open(value.url, '_blank');
        }
    };

    const showHint = focused && inputValue.length < 3;
    const showNoResults = focused && inputValue.length >= 3 && filteredOptions?.length === 0;

    if (filteredOptions === undefined) return null;
    return (
        <Col bgcolor={'#ECF2FF'} borderRadius={'19px'} p={2} gap={1.5}>
            <Typography fontSize={20} fontWeight={700}>
                {t('sidebar.search.title')}
            </Typography>

            <Autocomplete
                freeSolo
                options={filteredOptions}
                getOptionLabel={option => (typeof option === 'string' ? option : option.name)}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                onChange={handleSelect}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                renderInput={params => <TextField {...params} label="Поиск" variant="outlined" />}
                renderOption={(props, option) => (
                    <li {...props} key={option.url}>
                        {option.name}
                    </li>
                )}
            />

            {showHint && (
                <Typography textAlign={'center'} variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    🔍 Введите минимум 3 символа, чтобы начать поиск по названию сайта.
                </Typography>
            )}

            {showNoResults && (
                <Typography textAlign={'center'} variant="body2" color="error" sx={{ mt: 1 }}>
                    ❌ Ничего не найдено по вашему запросу.
                </Typography>
            )}
        </Col>
    );
};
