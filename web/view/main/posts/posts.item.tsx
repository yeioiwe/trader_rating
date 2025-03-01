import ArrowIcon from '@/public/icons/arrow_icon.svg';
import PostCommentsIcon from '@/public/icons/post_comments.svg';
import PostLikeIcon from '@/public/icons/post_like.svg';
import PostReadtimeIcon from '@/public/icons/post_time.svg';
import PostWatchIcon from '@/public/icons/post_watch.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const PostItem = ({
    title,
    date,
    readTime,
    watch,
    comments,
    likes,
}: {
    title: string;
    date: string;
    readTime: number;
    watch: number;
    comments: number;
    likes: number;
}) => {
    return (
        <Col
            px={2}
            py={1.5}
            borderRadius={'9px'}
            minHeight={'95px'}
            justifyContent={'space-between'}
            sx={{
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                '&:hover': {
                    bgcolor: '#f0f8ff',
                },
            }}
        >
            <Row justifyContent={'space-between'}>
                <Typography fontSize={16} fontWeight={700}>
                    {title}
                </Typography>

                <ArrowIcon />
            </Row>

            <Row justifyContent={'space-between'}>
                <Row gap={5}>
                    <Typography fontWeight={300} color={'#918C8C'} fontSize={14}>
                        {date}
                    </Typography>

                    <Row gap={1} fontWeight={300} color={'#918C8C'} fontSize={14}>
                        <PostReadtimeIcon />

                        <Typography>{readTime} мин.</Typography>
                    </Row>
                </Row>

                <Row gap={3}>
                    <Row gap={1} fontWeight={300} color={'#918C8C'} fontSize={14}>
                        <PostWatchIcon />

                        <Typography>{watch}</Typography>
                    </Row>

                    <Row gap={1} fontWeight={300} color={'#918C8C'} fontSize={14}>
                        <PostCommentsIcon />

                        <Typography>{comments}</Typography>
                    </Row>

                    <Row gap={1} fontWeight={300} color={'#918C8C'} fontSize={14}>
                        <PostLikeIcon />

                        <Typography>{likes}</Typography>
                    </Row>
                </Row>
            </Row>
        </Col>
    );
};
