import CommentsIcon from '@/public/icons/profile_comments_icon.svg';
import { NewsCommentItem as NewsCommentItemType } from '@/shared/config/api/api.schemas';
import { useNewsGetComments } from '@/shared/config/api/news/news';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { NewsCommentItem } from './news.comment.item';

export const NewsCommentsList = ({ id }: { id: number }) => {
    const { data } = useNewsGetComments(id);
    const [commentsCount, setCommentsCount] = useState(5);
    const [comments, setComments] = useState<NewsCommentItemType[]>();
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
                    Комментарии к публикации:
                </Typography>
            </Row>

            <Col bgcolor={'#ECF2FF'} borderRadius={'9px'} py={2.25} px={1.75} gap={2}>
                {comments.map((c, i) => (
                    <NewsCommentItem comment={c} key={i} />
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
