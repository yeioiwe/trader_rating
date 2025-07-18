import { useVerifiedEditSeo, useVerifiedGetSeo } from '@/config/api/verified/verified';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const VerifiedSeoMain = ({ id }: { id: number }) => {
    const { getValues, setValue, register } = useForm();
    const { mutate } = useVerifiedEditSeo();
    const { data: seoTitles } = useVerifiedGetSeo(id);

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
