'use client';
import { usePostGetList } from '@/shared/config/api/post/post';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { PostItem } from './posts.item';

export const PostsList = () => {
    const { t } = useTranslation();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { data: posts } = usePostGetList();

    if (posts === undefined) return null;
    return (
        <Col p={isSm ? 1 : 2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            {posts.items.slice(0, 3).map((p, i) => (
                <PostItem post={p} key={i} />
            ))}

            <Row justifyContent={'flex-start'}>
                <FullListButton text={t('main.button_full_list')} />
            </Row>
        </Col>
    );
};

const FullListButton = ({ text }: { text: string }) => {
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Button
            onClick={() => router.push('/posts')}
            sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: isSm ? '100%' : 250, minHeight: 50 }}
        >
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};
