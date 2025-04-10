'use client';

import { queryClient } from '@/config/api/api.axios';
import { CommentStarRate } from '@/config/api/api.schemas';
import { getScammersGetCommentListQueryKey, useScammersCommentCreate } from '@/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ScammerEditCommentCreate = ({ id }: { id: number }) => {
    const { register, getValues } = useForm();
    const { mutate } = useScammersCommentCreate();

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
                    queryClient.invalidateQueries({ queryKey: getScammersGetCommentListQueryKey(id) });
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
