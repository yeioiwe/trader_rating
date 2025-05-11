'use client';
import AboutButtonIcon from '@/public/icons/lawyer_about.svg';
import LawyerCommentsIcon from '@/public/icons/lawyer_commnets.svg';
import LawyerReportsIcon from '@/public/icons/lawyer_reports.svg';
import TelegramButtonIcon from '@/public/icons/lawyer_telegram.svg';
import LawyerVerifiedIcon from '@/public/icons/lawyer_verified.svg';
import { LawyerBanner, LawyerBannerItem } from '@/shared/config/api/api.schemas';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export const LaweyrAbout = ({ lawyer }: { lawyer: LawyerBanner }) => {
    const { t } = useTranslation();

    return (
        <Col width={'100%'} gap={2}>
            <Row gap={2} justifyContent={'flex-start'}>
                <LawyerVerifiedIcon />

                <Typography fontSize={20} color="white" fontWeight={700}>
                    {lawyer.title}
                </Typography>
            </Row>

            <Typography fontSize={16} color="white">
                {lawyer.description}
            </Typography>

            <Col gap={1}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <LawyerStatisticItem
                        icon={<LawyerCommentsIcon />}
                        text={t('main.lawyer.about.statistics_rewiew')}
                        value={`${lawyer.reviews}`}
                    />

                    <LawyerStatisticItem
                        icon={<LawyerReportsIcon />}
                        text={t('main.lawyer.about.statistics_reports')}
                        value={`${lawyer.reports}`}
                    />
                </Row>

                <Row gap={2} justifyContent={'flex-start'}>
                    <LawyerSocialButtons
                        url={lawyer.tgUrl}
                        icon={<TelegramButtonIcon />}
                        text={t('main.lawyer.about.button_tg')}
                    />

                    <LawyerSocialButtons
                        url={lawyer.detailsUrl}
                        icon={<AboutButtonIcon />}
                        text={t('main.lawyer.about.button_about')}
                    />
                </Row>
            </Col>
        </Col>
    );
};

const LawyerStatisticItem = ({ text, value, icon }: { text: string; value: string; icon: ReactNode }) => {
    return (
        <Col minWidth={230} px={2} pb={0.5} bgcolor={'#69B2E4'} borderRadius={'9px'}>
            <Row justifyContent={'flex-start'} gap={2}>
                {icon}

                <Typography fontSize={32} fontWeight={700} color="white">
                    {value}
                </Typography>
            </Row>

            <Typography fontWeight={300} fontSize={16} color="white">
                {text}
            </Typography>
        </Col>
    );
};

const LawyerSocialButtons = ({ text, icon, url }: { text: string; icon: ReactNode; url: string }) => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push(url)}
            sx={{ minWidth: '230px', height: '50px', bgcolor: '#69B2E4', borderRadius: '9px' }}
        >
            <Row gap={2} justifyContent={'flex-start'} width={'100%'} px={0.7}>
                {icon}

                <Typography fontWeight={300} color="white">
                    {text}
                </Typography>
            </Row>
        </Button>
    );
};
