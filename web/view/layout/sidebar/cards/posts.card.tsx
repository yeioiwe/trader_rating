'use client';
import ArrowIcon from '@/public/icons/arrow_icon.svg';
import PostIcon from '@/public/icons/layout_post.svg';
import { usePostGetList } from '@/shared/config/api/post/post';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const PostsCard = () => {
    const { t } = useTranslation();
    const { data: posts } = usePostGetList();

    if (posts === undefined) return null;
    return (
        <SidebarCard bgcolor={'#ECF2FF'} icon={<PostIcon />}>
            <Col gap={2}>
                <Typography fontSize={20} fontWeight={700}>
                    {t('sidebar.posts.title')}
                </Typography>

                <Col gap={1}>
                    {posts.items.slice(0, 3).map((p, i) => (
                        <PostItem title={p.title} url={p.url} key={i} />
                    ))}
                </Col>

                <AllPostsButton />
            </Col>
        </SidebarCard>
    );
};

const PostItem = ({ title, url }: { title: string; url: string }) => {
    const router = useRouter();

    return (
        <Row
            px={2}
            py={1.5}
            borderRadius={'8px'}
            justifyContent={'space-between'}
            sx={{
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                '&:hover': {
                    bgcolor: '#f0f8ff',
                },
            }}
            onClick={() => router.push(`/posts/${url}`)}
        >
            <Typography fontSize={14}>{title}</Typography>

            <ArrowIcon />
        </Row>
    );
};

const AllPostsButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push('/posts')} sx={{ bgcolor: '#FFFFFF', py: 1.75, borderRadius: '13px' }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                Смотреть все
            </Typography>
        </Button>
    );
};
