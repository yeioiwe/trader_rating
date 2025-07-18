import { queryClient } from '@/config/api/api.axios';
import { VerifiedCommentItem } from '@/config/api/api.schemas';
import { getPagesGetCommentRequestListQueryKey, usePagesGetCommentRequestList } from '@/config/api/pages/pages';
import {
    getVerifiedGetCommentListQueryKey,
    useVerifiedDeleteCreate,
    useVerifiedGetCommentList,
} from '@/config/api/verified/verified';
import { Col, Row } from '@/shared/ui/boxes';
import { RequestCommentItem } from '@/view/comments/request.comment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';

export const VerifiedEditCommentList = ({ id }: { id: number }) => {
    const { data } = useVerifiedGetCommentList(id);
    const { data: requestComment } = usePagesGetCommentRequestList('VERIFIED', id);

    const successInvalidate = () => {
        queryClient.invalidateQueries({ queryKey: getPagesGetCommentRequestListQueryKey('VERIFIED', id) });
        queryClient.invalidateQueries({ queryKey: getVerifiedGetCommentListQueryKey(id) });
    };

    if (data === undefined) return null;
    return (
        <Col gap={2}>
            {requestComment?.items.map((c, i) => (
                <RequestCommentItem successInvalidate={successInvalidate} comment={c} key={i} />
            ))}
            {data.items.map((c, i) => (
                <VerifiedEditItem comment={c} verififedId={id} key={i} />
            ))}
        </Col>
    );
};

const VerifiedEditItem = ({ comment, verififedId }: { comment: VerifiedCommentItem; verififedId: number }) => {
    const { mutate } = useVerifiedDeleteCreate();
    const handleDelete = () => {
        mutate(
            { id: comment.id },
            {
                onSuccess: () =>
                    queryClient.invalidateQueries({ queryKey: getVerifiedGetCommentListQueryKey(verififedId) }),
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
