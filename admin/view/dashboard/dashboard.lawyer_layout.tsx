'use client';
import { LawyerLayoutItemVisible, YoutubeLayoutItemVisible } from '@/config/api/api.schemas';
import { usePagesEditLawyerLayout, usePagesGetLawyerLayout } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { UploadAvatar } from '@/shared/ui/upload.avatar';
import { Button, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardLawyerLayout = () => {
    const { data: lawyer } = usePagesGetLawyerLayout();
    const { mutate } = usePagesEditLawyerLayout();
    const { register, getValues, setValue } = useForm();

    const [visible, setVisible] = useState<LawyerLayoutItemVisible>(LawyerLayoutItemVisible.VISIBLE);
    const [img, setImg] = useState<any>();

    const handleChange = (event: any) => {
        setVisible(event.target.value);
    };

    useEffect(() => {
        if (lawyer !== undefined) {
            setVisible(lawyer.visible);
            setImg(lawyer.avatar);
            setValue('name', lawyer.name);
            setValue('description', lawyer.description);
            setValue('tgUrl', lawyer.tgUrl);
            setValue('detailsUrl', lawyer.detailsUrl);
        }
    }, [lawyer]);

    const hendleEdit = () => {
        mutate({
            data: {
                visible: visible,
                avatar: img,
                name: getValues('name'),
                description: getValues('description'),
                detailsUrl: getValues('detailsUrl'),
                tgUrl: getValues('tgUrl'),
            },
        });
    };

    if (lawyer === undefined) return null;
    return (
        <form>
            <Col gap={2}>
                <Typography fontSize={21} fontWeight={700}>
                    Юрист Layout :
                </Typography>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Имя юриста:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('name')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Краткое описание:</Typography>
                    </Row>

                    <OutlinedInput multiline minRows={2} fullWidth {...register('description')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Фото юриста на баннере</Typography>
                    </Row>

                    <UploadAvatar img={img} setImg={setImg} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на тг канал:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('tgUrl')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на "подробнее":</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('detailsUrl')} />
                </Col>

                <Col gap={2}>
                    <Typography>Показывать/скрыть :</Typography>

                    <Select value={visible} onChange={handleChange}>
                        <MenuItem value={YoutubeLayoutItemVisible.VISIBLE}>VISIBLE</MenuItem>
                        <MenuItem value={YoutubeLayoutItemVisible.HIDDEN}>HIDDEN</MenuItem>
                    </Select>
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
