import NewsIcon from '@/public/icons/layout_news.svg';
import LikeIcon from '@/public/icons/news_like.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';
import { AllListButton } from './scammers.card';

export const NewsCard = () => {
    const { t } = useTranslation();

    return (
        <SidebarCard bgcolor={'#ECF2FF'} icon={<NewsIcon />}>
            <Col gap={2}>
                <Typography fontSize={20} fontWeight={700}>
                    {t('sidebar.news.title')}
                </Typography>

                <Col gap={1}>
                    <NewsItem
                        title={'Маск создал X-Coin – взлетел на 5000%, потом оказался мемом!'}
                        like={9120}
                        date={'15.10.2024'}
                        photoUrl={'/news.jpg'}
                    />
                    <NewsItem
                        title={'Биткоин на Марсе – колонисты SpaceX платят в BTC.'}
                        like={9120}
                        date={'15.10.2024'}
                        photoUrl={'/news.jpg'}
                    />
                    <NewsItem
                        title={'AI-крипта в шоке – ИИ сам майнит и рушит рынок!'}
                        like={9120}
                        date={'15.10.2024'}
                        photoUrl={'/news.jpg'}
                    />
                </Col>

                <AllListButton />
            </Col>
        </SidebarCard>
    );
};

const NewsItem = ({ title, like, date, photoUrl }: { title: string; like: number; date: string; photoUrl: string }) => {
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
        >
            <Image src={'/news.jpg'} alt="news" width={110} height={85} style={{ borderRadius: '8px' }} />

            <Col height={'100%'} justifyContent={'space-between'} width={'100%'}>
                <Typography sx={{ lineHeight: 1.2 }} fontSize={14}>
                    {title}
                </Typography>

                <Row justifyContent={'space-between'}>
                    <Row gap={1}>
                        <LikeIcon />

                        <Typography color={'#918C8C'} fontSize={14}>
                            {like}
                        </Typography>
                    </Row>

                    <Typography color={'#918C8C'} fontSize={14}>
                        {date}
                    </Typography>
                </Row>
            </Col>
        </Row>
    );
};
