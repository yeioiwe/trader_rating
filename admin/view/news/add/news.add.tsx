'use client';
import { useNewsCreate } from '@/config/api/news/news';
import { Col, Row } from '@/shared/ui/boxes';
import { UploadAvatar } from '@/shared/ui/upload.avatar';
import InfoIcon from '@mui/icons-material/Info';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Button, OutlinedInput, Tooltip, Typography } from '@mui/material';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const NewsAddMain = () => {
    const router = useRouter();
    const { register, getValues } = useForm();
    const { mutate } = useNewsCreate();
    const [news, setNews] = useState('');
    const [img, setImg] = useState<any>();

    const [date, setDate] = useState<Date>(dayjs('2022-04-17').toDate());

    const handleCreate = () => {
        mutate(
            {
                data: {
                    news,
                    avatar: img,
                    url: getValues('url'),
                    likes: getValues('likes'),
                    title: getValues('title'),
                    views: getValues('views'),
                    date: date,
                },
            },
            { onSuccess: data => router.push(`/news`) },
        );
    };

    return (
        <Col gap={4} width={'100%'}>
            <Row gap={2} justifyContent={'flex-start'}>
                <PostAddIcon />

                <Typography fontSize={21} fontWeight={700}>
                    Добавление новсти
                </Typography>
            </Row>

            <form>
                <Col gap={2}>
                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>URL новости (ссылка) :</Typography>
                        </Row>

                        <OutlinedInput {...register('url')} />
                    </Col>

                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>Краткий заголовок новости :</Typography>
                        </Row>

                        <OutlinedInput {...register('title')} />
                    </Col>

                    <Row justifyContent={'space-between'}>
                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Картинка на превью :</Typography>

                                <Tooltip title="Превью новости которое будет показываться в списке всех новостей. Заглавное фото">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <UploadAvatar img={img} setImg={setImg} />
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

                    <ReactQuill
                        formats={formats123}
                        modules={{
                            toolbar: toolbar123,
                        }}
                        theme="snow"
                        value={news}
                        onChange={setNews}
                    />

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
