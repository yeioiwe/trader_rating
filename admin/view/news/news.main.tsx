'use client';

import { NewsPreviewItem as NewsPreviewItemType } from '@/config/api/api.schemas';
import { useNewsGetList } from '@/config/api/news/news';
import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Button, Tooltip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

export const NewsMain = () => {
    const { data: news } = useNewsGetList();
    const router = useRouter();

    if (news === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <Row justifyContent={'space-between'}>
                <Row gap={2}>
                    <Typography fontSize={21} fontWeight={700}>
                        Список новостей
                    </Typography>

                    <Tooltip title="Страница Новости и её содержание">
                        <InfoIcon />
                    </Tooltip>
                </Row>

                <Button onClick={() => router.push('/news/add')} variant="contained" color="primary">
                    Добавить новость
                </Button>
            </Row>

            <Row flexWrap={'wrap'} justifyContent={'flex-start'} gap={1}>
                {news.items.map((n, i) => (
                    <NewsPreviewItem news={n} key={i} />
                ))}
            </Row>
        </Col>
    );
};

const NewsPreviewItem = ({ news }: { news: NewsPreviewItemType }) => {
    const router = useRouter();
    return (
        <Col
            minWidth={'45%'}
            gap={2}
            py={2}
            px={4}
            bgcolor={'white'}
            border={news.notification ? '2px solid #2892c4' : '2px solid rgb(212 212 212)'}
            borderRadius={'9px'}
            onClick={() => router.push(`/news/edit/${news.id}`)}
            sx={{ cursor: 'pointer' }}
        >
            <Row justifyContent={'flex-start'} gap={2}>
                <NewspaperIcon />

                <Typography fontWeight={500} fontSize={21}>
                    {news.title}
                </Typography>
            </Row>

            <Row justifyContent={'flex-end'}>
                <Typography>{dayjs(news.date).format('DD.MM.YYYY')}</Typography>
            </Row>
        </Col>
    );
};
