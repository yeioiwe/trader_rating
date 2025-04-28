'use client';
import PostWatchIcon from '@/public/icons/post_watch.svg';
import { NewsPreviewItem } from '@/shared/config/api/api.schemas';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

export const NewsItem = ({ news }: { news: NewsPreviewItem }) => {
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            onClick={() => router.push(`/news/${news.url}`)}
            className="item"
            gap={1.5}
            width={isSm ? '100%' : 223}
            flexShrink={0}
            sx={{ cursor: 'pointer' }}
        >
            <img
                src={news.avatar}
                alt="news"
                style={{ borderRadius: '9px', objectFit: 'cover', width: isSm ? '100%' : 223, maxHeight: '170px' }}
            />
            {/* <Image src={news.avatar} alt="news" style={{ borderRadius: '9px', objectFit: 'cover' }} /> */}

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
