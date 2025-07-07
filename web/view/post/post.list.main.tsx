'use client';
import PostsTitleIcon from '@/public/icons/layout_post.svg';
import { usePostGetList } from '@/shared/config/api/post/post';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import { PostListItem } from './list/post.list.item';

export const PostListMain = ({ initialData }: { initialData: any }) => {
    const { data: posts } = usePostGetList({ query: { initialData: initialData } });

    if (posts === undefined) return null;

    return (
        <Col gap={4}>
            <Col gap={1}>
                <Row justifyContent={'flex-start'} gap={2}>
                    <PostsTitleIcon />

                    <Typography fontSize={30} fontWeight={700}>
                        Статьи редакции
                    </Typography>
                </Row>

                <Typography fontSize={16} color="#3B3B3B">
                    На этой странице мы делимся внутренними материалами нашей команды: как мы проводим проверки
                    проектов, на что обращаем внимание, а также публикуем личные истории, мнения и полезные советы. Это
                    пространство прозрачности, опыта и живого общения с читателями — всё, что помогает лучше
                    ориентироваться в мире криптовалют.
                </Typography>
            </Col>

            <Col gap={2}>
                {posts.items.map((p, i) => (
                    <PostListItem post={p} key={i} />
                ))}
            </Col>
        </Col>
    );
};
