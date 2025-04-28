import CommentsIcon from '@/public/icons/profile_comments_icon.svg';
import { ScammerCommentItem as ScammerCommentItemType } from '@/shared/config/api/api.schemas';
import { useScammersGetCommentList } from '@/shared/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ScammerCommentItem } from './scammer.comment.item';

export const ScammerProfileComments = ({ id }: { id: number }) => {
    const { data } = useScammersGetCommentList(id);
    const [commentsCount, setCommentsCount] = useState(5);
    const [comments, setComments] = useState<ScammerCommentItemType[]>();
    const [disableLoading, setDisableLoading] = useState(false);

    useEffect(() => {
        if (data) {
            setComments(data.items.slice(0, 5));
        }
    }, [data]);

    const hendleLoading = () => {
        setCommentsCount(commentsCount + 5);
    };

    useEffect(() => {
        if (data && commentsCount > data?.items.length) {
            setDisableLoading(true);
        }
    }, [commentsCount, comments]);

    useEffect(() => {
        if (data) {
            setComments(data.items.slice(0, commentsCount));
        }
    }, [commentsCount]);

    if (comments === undefined) return null;
    if (comments.length < 1) return null;
    return (
        <Col gap={2}>
            <Row justifyContent={'flex-start'} gap={1.5}>
                <CommentsIcon />

                <Typography fontSize={24} fontWeight={700}>
                    Последние отзывы о проекте:
                </Typography>
            </Row>

            <Col bgcolor={'#ECF2FF'} borderRadius={'9px'} py={2.25} px={1.75} gap={2}>
                {comments.map((c, i) => (
                    <ScammerCommentItem comment={c} key={i} />
                ))}

                <Row justifyContent={'center'} width={'100%'}>
                    <Button
                        onClick={() => hendleLoading()}
                        sx={{
                            width: '320px',
                            bgcolor: 'white',
                            border: '2px solid #69B2E4',
                            borderRadius: '7px',
                            display: disableLoading ? 'none' : null,
                        }}
                    >
                        <Typography color="#69B2E4" fontSize={20} fontWeight={700}>
                            Показать больше
                        </Typography>
                    </Button>
                </Row>
            </Col>
        </Col>
    );
};
