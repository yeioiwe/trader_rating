'use client';
import { YoutubeLayoutItemVisible } from '@/config/api/api.schemas';
import { usePagesEditYoutubeLayout, usePagesGetYoutubeLayout } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardYoutubeLayout = () => {
    const { data: youtube } = usePagesGetYoutubeLayout();
    const { mutate } = usePagesEditYoutubeLayout();
    const { register, getValues, setValue } = useForm();

    const [visible, setVisible] = useState<YoutubeLayoutItemVisible>(YoutubeLayoutItemVisible.VISIBLE);

    const handleChange = (event: any) => {
        setVisible(event.target.value);
    };

    useEffect(() => {
        if (youtube !== undefined) {
            setVisible(youtube.visible);
            setValue('name', youtube.name);
            setValue('description', youtube.description);
            setValue('videoId', youtube.videoId);
            setValue('tgUrl', youtube.tgUrl);
            setValue('youtubeUrl', youtube.youtubeUrl);
        }
    }, [youtube]);

    const hendleEdit = () => {
        mutate({
            data: {
                visible: visible,
                name: getValues('name'),
                description: getValues('description'),
                videoId: getValues('videoId'),
                tgUrl: getValues('tgUrl'),
                youtubeUrl: getValues('youtubeUrl'),
            },
        });
    };

    if (youtube === undefined) return null;
    return (
        <form>
            <Col gap={2}>
                <Typography fontSize={21} fontWeight={700}>
                    Youtube Layout :
                </Typography>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Заголовок:</Typography>
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
                        <Typography>ID видео:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('videoId')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на тг канал:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('tgUrl')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на Youtube канал:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('youtubeUrl')} />
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
