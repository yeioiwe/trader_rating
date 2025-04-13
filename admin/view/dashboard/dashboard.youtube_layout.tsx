'use client';
import { usePagesEditYoutubeLayout, usePagesGetYoutubeLayout } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import { Button, OutlinedInput, Tooltip, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardYoutubeLayout = () => {
    const { data: youtube } = usePagesGetYoutubeLayout();
    const { mutate } = usePagesEditYoutubeLayout();
    const { register, getValues, setValue } = useForm();

    useEffect(() => {
        if (youtube !== undefined) {
            setValue('tgUrl', youtube.tgUrl);
            setValue('youtubeUrl', youtube.youtubeUrl);
        }
    }, [youtube]);

    const hendleEdit = () => {
        mutate({
            data: {
                tgUrl: getValues('tgUrl'),
                youtubeUrl: getValues('youtubeUrl'),
            },
        });
    };

    if (youtube === undefined) return null;
    return (
        <form>
            <Col gap={2}>
                <Row gap={4} justifyContent={'flex-start'}>
                    <Typography>Youtube Layout :</Typography>

                    <Tooltip title="Youtube Мориарти (нахоидтся справа в layout списке)">
                        <InfoIcon />
                    </Tooltip>
                </Row>

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

                <Row justifyContent={'flex-end'}>
                    <Button onClick={() => hendleEdit()} variant="contained" color="primary">
                        Обновить
                    </Button>
                </Row>
            </Col>
        </form>
    );
};
