'use client';
import TelegramIcon from '@/public/icons/youtube_layout_tg.svg';
import YoutubeIcon from '@/public/icons/youtube_layout_yt.svg';
import YoutubeTopIcon from '@/public/icons/youtube_layout_icon.svg';
import { usePagesGetYoutubeLayout } from '@/shared/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, CircularProgress, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const YoutubeCard = () => {
    const { data: youtube } = usePagesGetYoutubeLayout();
    const { t } = useTranslation();

    if (youtube === undefined) return null;
    return (
        <SidebarCard bgcolor={'#c53d3d'} icon={<YoutubeTopIcon />}>
            <Col gap={1.5}>
                <Col gap={0.5}>
                    <Typography color="#FFFFFF" fontSize={20} fontWeight={700}>
                        {youtube.name}
                    </Typography>

                    <Typography color="#FFFFFF" fontSize={16}>
                        {youtube.description}
                    </Typography>
                </Col>

                {youtube.videoId.length > 3 && (
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                            src={`https://www.youtube.com/embed/${youtube.videoId}`}
                            title="YouTube Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                borderRadius: '9px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        ></iframe>
                    </div>
                )}

                {youtube.tgUrl.length > 3 && (
                    <CardButton url={youtube.tgUrl} name={t('sidebar.youtube.tg_button')} icon={<TelegramIcon />} />
                )}
                {youtube.youtubeUrl.length > 3 && (
                    <CardButton url={youtube.youtubeUrl} name={t('sidebar.youtube.yt_button')} icon={<YoutubeIcon />} />
                )}
            </Col>
        </SidebarCard>
    );
};

const CardButton = ({ name, icon, url }: { name: string; icon: ReactNode; url: string }) => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(url)} sx={{ bgcolor: '#FFFFFF', minHeight: '50px', borderRadius: '9px' }}>
            <Row width={'100%'} px={2} justifyContent={'space-between'}>
                <Typography fontWeight={300} fontSize={20} color="#c53d3d">
                    {name}
                </Typography>

                {icon}
            </Row>
        </Button>
    );
};
