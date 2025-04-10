'use client';
import { usePostCreatePreview } from '@/config/api/post/post';
import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Button, OutlinedInput, Tooltip, Typography } from '@mui/material';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const PostAddMain = () => {
    const router = useRouter();
    const { register, getValues } = useForm();
    const { mutate } = usePostCreatePreview();

    const [date, setDate] = useState<Date>(dayjs('2022-04-17').toDate());

    const handleCreate = () => {
        mutate(
            {
                data: {
                    url: getValues('url'),
                    likes: getValues('likes'),
                    readTime: getValues('readTime'),
                    title: getValues('title'),
                    views: getValues('views'),
                    date: date,
                },
            },
            { onSuccess: data => router.push(`/post/edit/${data}`) },
        );
    };

    return (
        <Col gap={4} width={'100%'}>
            <Row gap={2} justifyContent={'flex-start'}>
                <PostAddIcon />

                <Typography fontSize={21} fontWeight={700}>
                    Добавление нового поста
                </Typography>
            </Row>

            <form>
                <Col gap={2}>
                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>URL поста (ссылка) :</Typography>
                        </Row>

                        <OutlinedInput {...register('url')} />
                    </Col>

                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>Заголовок поста :</Typography>
                        </Row>

                        <OutlinedInput {...register('title')} />
                    </Col>

                    <Row justifyContent={'space-between'}>
                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Время на прочтение :</Typography>

                                <Tooltip title="Приблезительное время прочтения статьи, просто цифра, которая будет отображаться для улчшеного визуала поста.">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('readTime')} />
                        </Col>

                        <Col gap={2}>
                            <Typography>К-во лайков :</Typography>

                            <OutlinedInput {...register('likes')} />
                        </Col>

                        <Col gap={2}>
                            <Typography>К-во просмотров :</Typography>

                            <OutlinedInput {...register('views')} />
                        </Col>

                        <Col gap={2}>
                            <Typography>Дата публикации :</Typography>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateField']} sx={{ padding: 0 }}>
                                    <DateField
                                        value={dayjs(date)}
                                        onChange={newValue => setDate(newValue?.toDate() as Date)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Col>
                    </Row>

                    <Row justifyContent={'flex-end'}>
                        <Button onClick={() => handleCreate()} variant="contained" color="primary">
                            Сохранить
                        </Button>
                    </Row>
                </Col>
            </form>
        </Col>
    );
};
