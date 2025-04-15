'use client';
import { queryClient } from '@/config/api/api.axios';
import { getPagesGetImagesBannerQueryKey, usePagesCreateImagesBanner } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { UploadAvatar } from '@/shared/ui/upload.avatar';
import InfoIcon from '@mui/icons-material/Info';
import { Button, OutlinedInput, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardImagesBanner = () => {
    const { register, getValues } = useForm();
    const [img, setImg] = useState<any>();
    const { mutate } = usePagesCreateImagesBanner();

    const handleCreate = () => {
        mutate(
            {
                data: {
                    url: getValues('url'),
                    name: getValues('name'),
                    image: img,
                },
            },
            { onSuccess: () => queryClient.invalidateQueries({ queryKey: getPagesGetImagesBannerQueryKey() }) },
        );
    };
    return (
        <form>
            <Col gap={2}>
                <Row gap={4} justifyContent={'flex-start'}>
                    <Typography fontSize={21} fontWeight={700}>
                        Баннер с картинками:
                    </Typography>

                    <Tooltip title="Баннер с картинками. Загружается картинка и ссылка, которая будет открыватся при нажатии на баннер">
                        <InfoIcon />
                    </Tooltip>
                </Row>
                <UploadAvatar img={img} setImg={setImg} />

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Название:</Typography>

                        <Tooltip title="Название используется исключительно для удобства в админке, пользователь его не видит">
                            <InfoIcon />
                        </Tooltip>
                    </Row>

                    <OutlinedInput fullWidth {...register('name')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка:</Typography>

                        <Tooltip title="Ссылка на страницу которая будет открываться при клике на баннер">
                            <InfoIcon />
                        </Tooltip>
                    </Row>

                    <OutlinedInput fullWidth {...register('url')} />
                </Col>

                <Row justifyContent={'flex-end'}>
                    <Button onClick={() => handleCreate()} variant="contained" color="primary">
                        Добавить
                    </Button>
                </Row>
            </Col>
        </form>
    );
};
