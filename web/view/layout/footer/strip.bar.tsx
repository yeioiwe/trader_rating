import BenefitsIcon from '@/public/icons/benefits_icon.svg';
import TelegramStripIcon from '@/public/icons/telegram_strip.svg';
import YoutubeStripIcon from '@/public/icons/youtube_strip.svg';
import StripLogo from '@/public/logo_strip.svg';
import theme from '@/shared/config/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

export const StripBar = () => {
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Container maxWidth="sm" sx={{ display: isLg ? 'none' : null }}>
            <Row
                width={'100%'}
                justifyContent={'space-evenly'}
                height={80}
                position={'fixed'}
                zIndex={1000}
                left={0}
                bottom={0}
                bgcolor={'#ECF2FF'}
            >
                <StripLogo />

                <Row gap={2}>
                    <BenefitItem text="Разоблочение" />
                    <BenefitItem text="Проверка проектов" />
                    <BenefitItem text="Консультация" />
                    <BenefitItem text="Отзывы на проекты" />
                </Row>

                <Row gap={2}>
                    <StripBarButton bgcolor="#C53D3D" text="YouTube" icon={<YoutubeStripIcon />} />
                    <StripBarButton bgcolor="#449FE8" text="Telegram" icon={<TelegramStripIcon />} />
                </Row>
            </Row>
        </Container>
    );
};

const StripBarButton = ({ icon, bgcolor, text }: { icon: ReactNode; bgcolor: string; text: string }) => {
    return (
        <Button sx={{ bgcolor: bgcolor, borderRadius: '9px', width: '145px', height: '45px' }}>
            <Row gap={1}>
                {icon}

                <Typography fontSize={14} color="white">
                    {text}
                </Typography>
            </Row>
        </Button>
    );
};

const BenefitItem = ({ text }: { text: string }) => {
    return (
        <Row gap={1}>
            <BenefitsIcon />

            <Typography>{text}</Typography>
        </Row>
    );
};
