import LawyerIcon from '@/public/icons/layout_lawyer.svg';
import YoutubeIcon from '@/public/icons/layout_youtube.svg';
import TelegramIcon from '@/public/icons/telegram.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const YoutubeCard = () => {
    const { t } = useTranslation();

    return (
        <SidebarCard bgcolor={'#449FE8'} icon={<LawyerIcon />}>
            <Col gap={1.5}>
                <Col gap={0.5}>
                    <Typography color="#FFFFFF" fontSize={20} fontWeight={700}>
                        {t('sidebar.youtube.title')}
                    </Typography>

                    <Typography color="#FFFFFF" fontSize={16}>
                        {t('sidebar.youtube.description')}
                    </Typography>
                </Col>

                <CardButton name={t('sidebar.youtube.tg_button')} icon={<TelegramIcon />} />

                <CardButton name={t('sidebar.youtube.yt_button')} icon={<YoutubeIcon />} />
            </Col>
        </SidebarCard>
    );
};

const CardButton = ({ name, icon }: { name: string; icon: ReactNode }) => {
    return (
        <Button sx={{ bgcolor: '#FFFFFF', minHeight: '50px', borderRadius: '9px' }}>
            <Row width={'100%'} px={2} justifyContent={'space-between'}>
                <Typography fontSize={20} color="#449FE8">
                    {name}
                </Typography>

                {icon}
            </Row>
        </Button>
    );
};
