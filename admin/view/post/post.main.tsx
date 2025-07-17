'use client';
import { PostPreviewItem as PostPreviewItemType } from '@/config/api/api.schemas';
import { usePostGetList } from '@/config/api/post/post';
import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Tooltip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

export const PostPageMain = () => {
    const router = useRouter();
    const { data: posts } = usePostGetList();

    if (posts === undefined) return null;
    return (
        <Col width={'100%'} gap={2}>
            <Row justifyContent={'space-between'}>
                <Row gap={2}>
                    <Typography fontSize={21} fontWeight={700}>
                        Список постов
                    </Typography>

                    <Tooltip title="Список активных постов редакции">
                        <InfoIcon />
                    </Tooltip>
                </Row>

                <Button onClick={() => router.push('/post/add')} variant="contained" color="primary">
                    Добавить пост
                </Button>
            </Row>

            <Col gap={2}>
                {posts.items.map((p, i) => (
                    <PostPreviewItem post={p} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const PostPreviewItem = ({ post }: { post: PostPreviewItemType }) => {
    const router = useRouter();
    return (
        <Col
            gap={2}
            py={2}
            px={4}
            bgcolor={'white'}
            border={post.notification ? '2px solid #2892c4' : '2px solid rgb(212 212 212)'}
            borderRadius={'9px'}
            onClick={() => router.push(`/post/edit/${post.id}`)}
            sx={{ cursor: 'pointer' }}
        >
            <Typography fontWeight={500} fontSize={21}>
                {post.title}
            </Typography>

            <Typography>{dayjs(post.date).format('DD.MM.YYYY')}</Typography>
        </Col>
    );
};
