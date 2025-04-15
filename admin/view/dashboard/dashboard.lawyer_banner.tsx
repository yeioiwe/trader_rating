'use client';
import { usePagesEditLawyerBanner, usePagesGetLawyerBanner } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { UploadAvatar } from '@/shared/ui/upload.avatar';
import InfoIcon from '@mui/icons-material/Info';
import { Button, OutlinedInput, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardLawyerBanner = () => {
    const { data: banner } = usePagesGetLawyerBanner();
    const { mutate } = usePagesEditLawyerBanner();
    const { register, getValues, setValue } = useForm();

    const [img, setImg] = useState<any>();

    useEffect(() => {
        if (banner !== undefined) {
            setImg(banner.avatar),
                setValue('description', banner.description),
                setValue('name', banner.name),
                setValue('reports', banner.reports),
                setValue('reviews', banner.reviews),
                setValue('title', banner.title),
                setValue('detailsUrl', banner.detailsUrl),
                setValue('tgUrl', banner.tgUrl);
        }
    }, [banner]);

    const hendleEdit = () => {
        mutate({
            data: {
                avatar: img,
                description: getValues('description'),
                name: getValues('name'),
                reports: getValues('reports'),
                reviews: getValues('reviews'),
                title: getValues('title'),
                detailsUrl: getValues('detailsUrl'),
                tgUrl: getValues('tgUrl'),
            },
        });
    };

    if (banner === undefined) return null;
    return (
        <form>
            <Col gap={2}>
                <Row gap={4} justifyContent={'flex-start'}>
                    <Typography fontSize={21} fontWeight={700}>
                        Баннер юрист :
                    </Typography>

                    <Tooltip title="Большой синий баннер юриста на главной странице. Редактирование ссылок на кнопках">
                        <InfoIcon />
                    </Tooltip>
                </Row>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Фото юриста на баннере</Typography>
                    </Row>

                    <UploadAvatar img={img} setImg={setImg} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Имя юриста (под фото)</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('name')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Заголовок баннера:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('title')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Описание:</Typography>
                    </Row>

                    <OutlinedInput multiline minRows={4} fullWidth {...register('description')} />
                </Col>

                <Row justifyContent={'flex-start'} gap={4}>
                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>К-во отзывов (цифра):</Typography>
                        </Row>

                        <OutlinedInput fullWidth {...register('reviews')} />
                    </Col>

                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>Обработано жалоб (цифра):</Typography>
                        </Row>

                        <OutlinedInput fullWidth {...register('reports')} />
                    </Col>
                </Row>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на тг канал:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('tgUrl')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на кнопку "подробнее":</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('detailsUrl')} />
                </Col>

                <Row justifyContent={'flex-end'}>
                    <Button onClick={() => hendleEdit()} variant="contained" color="primary">
                        Обновить
                    </Button>
                </Row>
            </Col>
        </form>
    );
};
