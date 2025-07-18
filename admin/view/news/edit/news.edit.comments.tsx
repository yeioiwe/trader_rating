'use client';
import { queryClient } from '@/config/api/api.axios';
import { CommentStarRate, NewsCommentItem } from '@/config/api/api.schemas';
import {
    getNewsGetCommentListQueryKey,
    useNewsCommentCreate,
    useNewsDeleteComment,
    useNewsGetCommentList,
} from '@/config/api/news/news';
import { getPagesGetCommentRequestListQueryKey, usePagesGetCommentRequestList } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { RequestCommentItem } from '@/view/comments/request.comment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, IconButton, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const NewsEditCommentList = ({ id }: { id: number }) => {
    const { data } = useNewsGetCommentList(id);
    const { data: requestCommnet } = usePagesGetCommentRequestList('NEWS', id);

    const successInvalidate = () => {
        queryClient.invalidateQueries({ queryKey: getPagesGetCommentRequestListQueryKey('NEWS', id) });
        queryClient.invalidateQueries({ queryKey: getNewsGetCommentListQueryKey(id) });
    };

    if (data === undefined) return null;
    return (
        <Col gap={2}>
            {requestCommnet?.items.map((c, i) => (
                <RequestCommentItem successInvalidate={successInvalidate} comment={c} key={i} />
            ))}
            {data.items.map((c, i) => (
                <NewsEditItem comment={c} newsId={id} key={i} />
            ))}
        </Col>
    );
};

const NewsEditItem = ({ comment, newsId }: { comment: NewsCommentItem; newsId: number }) => {
    const { mutate } = useNewsDeleteComment();
    const handleDelete = () => {
        mutate(
            { id: comment.id },
            {
                onSuccess: () => queryClient.invalidateQueries({ queryKey: getNewsGetCommentListQueryKey(newsId) }),
            },
        );
    };

    return (
        <Col gap={2} p={3} borderRadius={'9px'} bgcolor={'#ffffff'} border={'2px solid rgb(212 212 212)'}>
            <Row justifyContent={'space-between'}>
                <Typography>{comment.name}</Typography>

                <IconButton onClick={() => handleDelete()}>
                    <DeleteForeverIcon />
                </IconButton>
            </Row>

            <Typography>{comment.comment}</Typography>

            <Typography>{dayjs(comment.date).format('DD.MM.YYYY')}</Typography>
        </Col>
    );
};

export const NewsEditCommentCreate = ({ id }: { id: number }) => {
    const { register, getValues } = useForm();
    const { mutate } = useNewsCommentCreate();

    const [starRate, setStarRate] = useState<CommentStarRate>(CommentStarRate.NUMBER_2);
    const handleChange = (event: any) => {
        setStarRate(event.target.value);
    };

    const [commentDate, setCommentDate] = useState<Date>(dayjs('2022-04-17').toDate());

    const hendleCreateComment = () => {
        mutate(
            {
                id,
                data: {
                    comment: getValues('comment'),
                    name: getValues('name'),
                    starRate: starRate,
                    date: commentDate,
                },
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: getNewsGetCommentListQueryKey(id) });
                },
            },
        );
    };
    return (
        <form>
            <Col gap={2}>
                <Row gap={4} justifyContent={'flex-start'}>
                    <Col gap={2}>
                        <Typography>Имя комментатора :</Typography>

                        <OutlinedInput {...register('name')} />
                    </Col>

                    <Col gap={2}>
                        <Typography>К-во звезд, оценка :</Typography>

                        <Select value={starRate} onChange={handleChange}>
                            <MenuItem value={CommentStarRate.NUMBER_1}>1 звезда</MenuItem>
                            <MenuItem value={CommentStarRate.NUMBER_2}>2 звезды</MenuItem>
                            <MenuItem value={CommentStarRate.NUMBER_3}>3 звезды</MenuItem>
                            <MenuItem value={CommentStarRate.NUMBER_4}>4 звезды</MenuItem>
                            <MenuItem value={CommentStarRate.NUMBER_5}>5 звезд</MenuItem>
                        </Select>
                    </Col>

                    <Col gap={2}>
                        <Typography>Дата :</Typography>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']} sx={{ padding: 0 }}>
                                <DateField
                                    value={dayjs(commentDate)}
                                    onChange={newValue => setCommentDate(newValue?.toDate() as Date)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Col>
                </Row>

                <Col gap={2}>
                    <Typography>Комментарий :</Typography>

                    <OutlinedInput multiline minRows={3} {...register('comment')} />
                </Col>

                <Row justifyContent={'flex-end'}>
                    <Button onClick={() => hendleCreateComment()} variant="contained" color="primary">
                        Добавить
                    </Button>
                </Row>
            </Col>
        </form>
    );
};
