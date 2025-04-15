'use client';
import { HeaderBannerType } from '@/config/api/api.schemas';
import { usePagesEditHeaderBanner, usePagesGetHeaderBanner } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import { Button, MenuItem, OutlinedInput, Select, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardHeaderBanner = () => {
    const { register, getValues, setValue } = useForm();
    const { data: banner } = usePagesGetHeaderBanner();
    const { mutate } = usePagesEditHeaderBanner();
    const [type, setType] = useState<HeaderBannerType>('YOUTUBE');

    const handleTypeChange = (event: any) => {
        setType(event.target?.value);
    };

    useEffect(() => {
        if (banner !== undefined) {
            setType(banner.bannerType);
            setValue('url', banner.url);
        }
    }, [banner]);

    const handleEdit = () => {
        mutate({
            data: {
                bannerType: type,
                url: getValues('url'),
            },
        });
    };

    if (!banner) return null;
    return (
        <form>
            <Col gap={2}>
                <Row gap={4} justifyContent={'flex-start'}>
                    <Typography fontSize={21} fontWeight={700}>
                        Баннер YouTube / Юрист :
                    </Typography>

                    <Tooltip title="Баннер находящийся в хеадере Youtube или Юрист и ссылки на них">
                        <InfoIcon />
                    </Tooltip>
                </Row>

                <Row gap={2}>
                    <Select value={type} onChange={handleTypeChange}>
                        <MenuItem value={HeaderBannerType.YOUTUBE}>YOUTUBE</MenuItem>
                        <MenuItem value={HeaderBannerType.LAWYER}>LAWYER</MenuItem>
                    </Select>

                    <OutlinedInput fullWidth {...register('url')} />
                </Row>

                <Row justifyContent={'flex-end'}>
                    <Button onClick={() => handleEdit()} variant="contained" color="primary">
                        Обновить
                    </Button>
                </Row>
            </Col>
        </form>
    );
};
