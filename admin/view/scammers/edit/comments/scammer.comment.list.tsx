import { queryClient } from '@/config/api/api.axios';
import { ScammerCommentItem } from '@/config/api/api.schemas';
import {
    getScammersGetCommentListQueryKey,
    useScammersDeleteCreate,
    useScammersGetCommentList,
} from '@/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';

export const ScammerEditCommentList = ({ id }: { id: number }) => {
    const { data } = useScammersGetCommentList(id);

    if (data === undefined) return null;
    return (
        <Col gap={2}>
            {data.items.map((c, i) => (
                <ScammerEditItem comment={c} scammerId={id} key={i} />
            ))}
        </Col>
    );
};

const ScammerEditItem = ({ comment, scammerId }: { comment: ScammerCommentItem; scammerId: number }) => {
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
