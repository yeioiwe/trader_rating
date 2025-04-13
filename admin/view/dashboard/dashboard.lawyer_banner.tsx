'use client';
import { usePagesEditLawyerBanner, usePagesGetLawyerBanner } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import { Button, OutlinedInput, Tooltip, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const DashboardLawyerBanner = () => {
    const { data: banner } = usePagesGetLawyerBanner();
    const { mutate } = usePagesEditLawyerBanner();
    const { register, getValues, setValue } = useForm();

    useEffect(() => {
        if (banner !== undefined) {
            setValue('tgUrl', banner.tgUrl), setValue('detailsUrl', banner.detailsUrl);
        }
    }, [banner]);

    const hendleEdit = () => {
        mutate({
            data: {
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
                    <Typography>Баннер юрист :</Typography>

                    <Tooltip title="Большой синий баннер юриста на главной странице. Редактирование ссылок на кнопках">
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
