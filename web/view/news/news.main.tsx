'use client';
import PostWatchIcon from '@/public/icons/post_watch.svg';
import { NewsPreviewItem } from '@/shared/config/api/api.schemas';
import { useNewsGetList } from '@/shared/config/api/news/news';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NewsTitle } from '../main/news/news.title';

export const NewsListMain = () => {
    const { data: news } = useNewsGetList();

    if (news === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <NewsTitle />

            <Row alignItems={'flex-start'} justifyContent={'flex-start'} gap={2} flexWrap={'wrap'}>
                {news.items.map((n, i) => (
                    <NewsItem news={n} key={i} />
                ))}
            </Row>
        </Col>
    );
};

export const NewsItem = ({ news }: { news: NewsPreviewItem }) => {
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            onClick={() => router.push(`/news/${news.url}`)}
            className="item"
            gap={1.5}
            maxWidth={isSm ? '100%' : 260}
            flexShrink={0}
            bgcolor={'#ECF2FF'}
            sx={{ cursor: 'pointer' }}
            borderRadius={'9px'}
            p={2}
        >
            <Image
                src={news.avatar}
                width={223}
                height={115}
                alt="news"
                style={{ borderRadius: '9px', objectFit: 'cover' }}
            />

            <Col>
                <Typography fontSize={16} fontWeight={500}>
                    {news.title}
                </Typography>

                <Row justifyContent={'space-between'}>
                    <Row gap={1}>
                        <PostWatchIcon />

                        <Typography fontWeight={300} fontSize={14} color={'#97A6A7'}>
                            {news.views}
                        </Typography>
                    </Row>

                    <Typography fontWeight={300} fontSize={14} color={'#97A6A7'}>
                        {dayjs(news.date).format('DD.MM.YYYY')}
                    </Typography>
                </Row>
            </Col>
        </Col>
    );
};
