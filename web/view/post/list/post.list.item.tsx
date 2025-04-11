'use client';
import ArrowIcon from '@/public/icons/arrow_icon.svg';
import PostLikeIcon from '@/public/icons/post_like.svg';
import PostReadtimeIcon from '@/public/icons/post_time.svg';
import PostWatchIcon from '@/public/icons/post_watch.svg';
import { PostPreviewItem } from '@/shared/config/api/api.schemas';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';

import { Typography, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

export const PostListItem = ({ post }: { post: PostPreviewItem }) => {
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            px={2.5}
            py={2}
            gap={isSm ? 2 : 0}
            borderRadius={'9px'}
            minHeight={'120px'}
            border={'3px solid #449FE8'}
            justifyContent={'space-between'}
            sx={{
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                '&:hover': {
                    bgcolor: '#f0f8ff',
                },
            }}
            onClick={() => router.push(`/posts/${post.url}`)}
        >
            <Row justifyContent={'space-between'}>
                <Typography fontSize={21} fontWeight={700} sx={{ maxWidth: isSm ? '90%' : '100%' }}>
                    {post.title}
                </Typography>

                <ArrowIcon />
            </Row>

            <Row justifyContent={'space-between'}>
                <Row gap={5}>
                    <Typography fontWeight={300} color={'#918C8C'} fontSize={18}>
                        {dayjs(post.date).format('DD.MM.YYYY')}
                    </Typography>

                    <Row gap={1} fontWeight={300} color={'#918C8C'} fontSize={18}>
                        <PostReadtimeIcon />

                        <Typography>{post.readTime} мин.</Typography>
                    </Row>
                </Row>

                <Row gap={3}>
                    <Row gap={1} fontWeight={300} color={'#918C8C'} fontSize={18}>
                        <PostWatchIcon />

                        <Typography>{post.views}</Typography>
                    </Row>

                    <Row
                        gap={1}
                        fontWeight={300}
                        color={'#918C8C'}
                        fontSize={14}
                        sx={{ display: isSm ? 'none' : 'flex' }}
                    >
                        <PostLikeIcon />

                        <Typography>{post.likes}</Typography>
                    </Row>
                </Row>
            </Row>
        </Col>
    );
};
