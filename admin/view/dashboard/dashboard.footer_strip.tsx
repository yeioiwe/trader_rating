'use client';
import { usePagesEditFooterStrip, usePagesGetFooterStrip } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardFooterStrip = () => {
    const { data: footer } = usePagesGetFooterStrip();
    const { mutate } = usePagesEditFooterStrip();
    const { register, getValues, setValue } = useForm();

    useEffect(() => {
        if (footer !== undefined) {
            setValue('tgUrl', footer.tgUrl);
            setValue('youtubeUrl', footer.youtubeUrl);
        }
    }, [footer]);

    const hendleEdit = () => {
        mutate({
            data: {
                tgUrl: getValues('tgUrl'),
                youtubeUrl: getValues('youtubeUrl'),
            },
        });
    };

    if (footer === undefined) return null;
    return (
        <form>
            <Col gap={2}>
                <Typography fontSize={21} fontWeight={700}>
                    Footer закрепленная полоса:
                </Typography>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на Youtube:</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('youtubeUrl')} />
                </Col>

                <Col gap={2}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Typography>Ссылка на TG::</Typography>
                    </Row>

                    <OutlinedInput fullWidth {...register('tgUrl')} />
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
