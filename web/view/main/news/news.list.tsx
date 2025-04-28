'use client';
import { useNewsGetTop } from '@/shared/config/api/news/news';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { NewsItem } from './news.item';

export const NewsList = () => {
    const { data: news } = useNewsGetTop();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <Col p={2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            <Row
                gap={isSm ? 2 : 0}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                sx={{
                    '@media (max-width: 1400px)': {
                        '& .item:nth-of-type(4)': {
                            display: 'none',
                        },
                    },
                }}
            >
                {news?.items.map((n, i) => (
                    <NewsItem news={n} key={i} />
                ))}
            </Row>

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
            onClick={() => router.push('/news')}
            sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: isSm ? '100%' : 250, minHeight: 50 }}
        >
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};
