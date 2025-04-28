'use client';
import NewsIcon from '@/public/icons/layout_news.svg';
import LikeIcon from '@/public/icons/news_like.svg';
import { NewsPreviewItem } from '@/shared/config/api/api.schemas';
import { useNewsGetTop } from '@/shared/config/api/news/news';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const NewsCard = () => {
    const { t } = useTranslation();
    const { data: news } = useNewsGetTop();

    if (news === undefined) return null;
    return (
        <SidebarCard bgcolor={'#ECF2FF'} icon={<NewsIcon />}>
            <Col gap={2}>
                <Typography fontSize={20} fontWeight={700}>
                    {t('sidebar.news.title')}
                </Typography>

                <Col gap={1}>
                    {news.items.map((n, i) => (
                        <NewsItem news={n} key={i} />
                    ))}
                </Col>

                <AllNewsButton />
            </Col>
        </SidebarCard>
    );
};

const NewsItem = ({ news }: { news: NewsPreviewItem }) => {
    const router = useRouter();

    return (
        <Row
            p={1}
            gap={2}
            borderRadius={'9px'}
            justifyContent={'flex-start'}
            height={'100px'}
            sx={{
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                '&:hover': {
                    bgcolor: '#f0f8ff',
                },
            }}
            onClick={() => router.push(`/news/${news.url}`)}
        >
            <Image src={news.avatar} alt="news" width={110} height={85} style={{ borderRadius: '8px' }} />

            <Col height={'100%'} justifyContent={'space-between'} width={'100%'}>
                <Typography sx={{ lineHeight: 1.2 }} fontSize={14}>
                    {news.title}
                </Typography>

                <Row justifyContent={'space-between'}>
                    <Row gap={1}>
                        <LikeIcon />

                        <Typography color={'#918C8C'} fontSize={14}>
                            {news.views}
                        </Typography>
                    </Row>

                    <Typography color={'#918C8C'} fontSize={14}>
                        {dayjs(news.date).format('DD.MM.YYYY')}
                    </Typography>
                </Row>
            </Col>
        </Row>
    );
};

const AllNewsButton = () => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Button onClick={() => router.push('/news')} sx={{ bgcolor: '#FFFFFF', py: 1.75, borderRadius: '13px' }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {t('sidebar.scammers.button')}
            </Typography>
        </Button>
    );
};
