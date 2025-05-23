'use client';
import BenefitsIcon from '@/public/icons/benefits_icon.svg';
import TelegramStripIcon from '@/public/icons/telegram_strip.svg';
import YoutubeStripIcon from '@/public/icons/youtube_strip.svg';
import StripLogo from '@/public/logo_strip.svg';
import { usePagesGetFooterStrip } from '@/shared/config/api/pages/pages';
import theme from '@/shared/config/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export const StripBar = () => {
    const { data: footer } = usePagesGetFooterStrip();
    const isLg = useMediaQuery(theme.breakpoints.down('lg'));

    if (footer === undefined) return null;
    return (
        <Container maxWidth="sm" sx={{ display: isLg ? 'none' : null }}>
            <Row
                width={'100%'}
                justifyContent={'flex-start'}
                height={80}
                position={'fixed'}
                zIndex={1000}
                left={0}
                bottom={0}
                bgcolor={'#ECF2FF'}
                pl={2}
            >
                <StripLogo />

                <Row gap={2}>
                    <Row gap={2}>
                        <StripBarButton
                            url={footer.youtubeUrl}
                            bgcolor="#C53D3D"
                            text="YouTube"
                            icon={<YoutubeStripIcon />}
                        />
                        <StripBarButton
                            url={footer.tgUrl}
                            bgcolor="#449FE8"
                            text="Telegram"
                            icon={<TelegramStripIcon />}
                        />
                    </Row>

                    <Row gap={2}>
                        <BenefitItem text="Разоблачение" />
                        <BenefitItem text="Проверка проектов" />
                        <BenefitItem text="Консультация" />
                        <BenefitItem text="Отзывы на проекты" />
                    </Row>
                </Row>
            </Row>
        </Container>
    );
};

const StripBarButton = ({
    icon,
    bgcolor,
    text,
    url,
}: {
    icon: ReactNode;
    bgcolor: string;
    text: string;
    url: string;
}) => {
    const router = useRouter();

    if (url.length < 3) return null;
    return (
        <Button
            onClick={() => router.push(url)}
            sx={{ bgcolor: bgcolor, borderRadius: '9px', width: '145px', height: '45px' }}
        >
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
