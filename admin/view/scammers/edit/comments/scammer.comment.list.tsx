import { queryClient } from '@/config/api/api.axios';
import { CommentCreateItemStarRate, ScammerCommentItem } from '@/config/api/api.schemas';
import { getPagesGetCommentRequestListQueryKey, usePagesGetCommentRequestList } from '@/config/api/pages/pages';
import {
    getScammersGetCommentListQueryKey,
    useScammersDeleteCreate,
    useScammersGetCommentList,
} from '@/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { RequestCommentItem } from '@/view/comments/request.comment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, Rating, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const ScammerEditCommentList = ({ id }: { id: number }) => {
    const { data } = useScammersGetCommentList(id);
    const { data: requestComment } = usePagesGetCommentRequestList('SCAMMER', id);

    const successInvalidate = () => {
        queryClient.invalidateQueries({ queryKey: getPagesGetCommentRequestListQueryKey('SCAMMER', id) });
        queryClient.invalidateQueries({ queryKey: getScammersGetCommentListQueryKey(id) });
    };

    if (data === undefined) return null;
    return (
        <Col gap={2}>
            {requestComment?.items.map((c, i) => (
                <RequestCommentItem successInvalidate={successInvalidate} comment={c} key={i} />
            ))}
            {data.items.map((c, i) => (
                <ScammerEditItem comment={c} scammerId={id} key={i} />
            ))}
        </Col>
    );
};

const ScammerEditItem = ({ comment, scammerId }: { comment: ScammerCommentItem; scammerId: number }) => {
    const [starRate, setStarRate] = useState<number>(2);
    const { mutate } = useScammersDeleteCreate();

    const handleDelete = () => {
        mutate(
            { id: comment.id },
            {
                onSuccess: () =>
                    queryClient.invalidateQueries({ queryKey: getScammersGetCommentListQueryKey(scammerId) }),
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
        <Col gap={2} p={3} borderRadius={'9px'} bgcolor={'#ffffff'} border={'2px solid rgb(212 212 212)'}>
            <Row justifyContent={'space-between'}>
                <Typography>{comment.name}</Typography>

                <IconButton onClick={() => handleDelete()}>
                    <DeleteForeverIcon />
                </IconButton>
            </Row>

            <Typography>{comment.comment}</Typography>

            <Typography>{dayjs(comment.date).format('DD.MM.YYYY')}</Typography>

            <Rating name="size-large" defaultValue={starRate} value={starRate} size="large" readOnly />
        </Col>
    );
};
