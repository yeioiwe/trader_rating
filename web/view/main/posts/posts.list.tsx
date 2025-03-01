import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PostItem } from './posts.item';

export const PostsList = () => {
    const { t } = useTranslation();

    return (
        <Col p={2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            {demoPosts.map((p, i) => (
                <PostItem {...p} key={i} />
            ))}

            <Row justifyContent={'flex-start'}>
                <FullListButton text={t('main.button_full_list')} />
            </Row>
        </Col>
    );
};

const FullListButton = ({ text }: { text: string }) => {
    return (
        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: 250, minHeight: 50 }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};

// DEMO POST LIST
const demoPosts = [
    {
        title: 'Почему DeFi продолжает набирать популярность?',
        date: '2025-02-15',
        readTime: 5,
        watch: 1100,
        comments: 40,
        likes: 250,
    },
    {
        title: 'Секреты успешного майнинга в 2025 году',
        date: '2025-02-12',
        readTime: 9,
        watch: 720,
        comments: 28,
        likes: 210,
    },
    {
        title: 'Как выбрать криптовалютную биржу в 2025 году?',
        date: '2025-02-10',
        readTime: 4,
        watch: 560,
        comments: 22,
        likes: 180,
    },
];
