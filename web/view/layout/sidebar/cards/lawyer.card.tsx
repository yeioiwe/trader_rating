'use client';
import ReviewIcon from '@/public/icons/lawyer_layout_arrow.svg';
import LawyerIcon from '@/public/icons/layout_lawyer.svg';
import TelegramIcon from '@/public/icons/telegram.svg';
import { usePagesGetLawyerLayout } from '@/shared/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const LawyerCard = () => {
    const { data: lawyer } = usePagesGetLawyerLayout();
    const { t } = useTranslation();

    if (lawyer === undefined) return null;
    return (
        <SidebarCard bgcolor={'#449FE8'} icon={<LawyerIcon />}>
            <Col gap={1.5}>
                <Col gap={2} height={'100%'} alignItems={'flex-start'}>
                    <Row justifyContent={'flex-start'} alignItems={'flex-start'} gap={2}>
                        <Image
                            src={lawyer.avatar}
                            width={90}
                            height={90}
                            style={{ borderRadius: '9px' }}
                            alt="lawyer"
                        />

                        <Col alignItems={'flex-start'} height={'100%'}>
                            <Typography color="#FFFFFF" fontSize={20} fontWeight={700}>
                                {lawyer.name}
                            </Typography>

                            <Typography color="#FFFFFF" fontSize={16} fontWeight={500}>
                                Юрист
                            </Typography>
                        </Col>
                    </Row>

                    <Typography color="#FFFFFF" fontSize={16}>
                        {lawyer.description}
                    </Typography>
                </Col>

                {lawyer.tgUrl.length > 3 && (
                    <CardButton url={lawyer.tgUrl} name={t('sidebar.youtube.tg_button')} icon={<TelegramIcon />} />
                )}

                {lawyer.detailsUrl.length > 3 && (
                    <CardButton url={lawyer.detailsUrl} name={'Подробнее'} icon={<ReviewIcon />} />
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
                <Typography fontWeight={300} fontSize={20} color="#449FE8">
                    {name}
                </Typography>

                {icon}
            </Row>
        </Button>
    );
};
