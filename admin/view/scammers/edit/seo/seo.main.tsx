import { useScammersEditSeo, useScammersGetSeo } from '@/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const ScammerSeoMain = ({ id }: { id: number }) => {
    const { getValues, setValue, register } = useForm();
    const { mutate } = useScammersEditSeo();
    const { data: seoTitles } = useScammersGetSeo(id);

    const hendleEdit = () => {
        mutate({
            id,
            data: {
                title: getValues('title'),
                description: getValues('description'),
            },
        });
    };

    useEffect(() => {
        if (!!seoTitles) {
            setValue('title', seoTitles.title);
            setValue('description', seoTitles.description);
        }
    }, [seoTitles]);

    return (
        <Col gap={4}>
            <Col gap={2}>
                <Typography>Заголовок Seo Tilte:</Typography>

                <OutlinedInput {...register('title')} />
            </Col>

            <Col gap={2}>
                <Typography>Заголовок Seo Description:</Typography>

                <OutlinedInput {...register('description')} />
            </Col>

            <Row justifyContent={'flex-end'}>
                <Button onClick={() => hendleEdit()} variant="contained">
                    Обновить
                </Button>
            </Row>
        </Col>
    );
};
