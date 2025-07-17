import { CommentCreateItem, CommentCreateItemStarRate } from '@/config/api/api.schemas';
import { usePagesDeleteRequestComment, usePagesSaveRequestComment } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Rating, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const RequestCommentItem = ({
    comment,
    successInvalidate,
}: {
    comment: CommentCreateItem;
    successInvalidate: () => void;
}) => {
    const [starRate, setStarRate] = useState<number>(2);

    const { mutate: mutateDelete } = usePagesDeleteRequestComment();
    const { mutate: mutateSave } = usePagesSaveRequestComment();

    const hendleDelete = () => {
        mutateDelete(
            { id: comment.id },
            {
                onSuccess: () => successInvalidate(),
            },
        );
    };

    const hendleSave = () => {
        mutateSave(
            { id: comment.id },
            {
                onSuccess: () => successInvalidate(),
            },
        );
    };

    useEffect(() => {
        switch (comment.starRate) {
            case CommentCreateItemStarRate.NUMBER_1:
                setStarRate(1);
                break;
            case CommentCreateItemStarRate.NUMBER_2:
                setStarRate(2);
                break;
            case CommentCreateItemStarRate.NUMBER_3:
                setStarRate(3);
                break;
            case CommentCreateItemStarRate.NUMBER_4:
                setStarRate(4);
                break;
            case CommentCreateItemStarRate.NUMBER_5:
                setStarRate(5);
                break;
        }
    }, []);

    return (
        <Col gap={2} p={3} borderRadius={'9px'} bgcolor={'#ffffff'} border={'2px solid #2892c4'}>
            <Typography>{comment.name}</Typography>

            <Typography>{comment.comment}</Typography>

            <Typography>{dayjs(comment.date).format('DD.MM.YYYY')}</Typography>

            <Rating name="size-large" defaultValue={starRate} value={starRate} size="large" readOnly />

            <Row justifyContent={'flex-end'} gap={2}>
                <Button onClick={() => hendleSave()} variant="contained">
                    Опубликовать
                </Button>

                <Button onClick={() => hendleDelete()} variant="contained" color="error">
                    Удалить
                </Button>
            </Row>
        </Col>
    );
};
