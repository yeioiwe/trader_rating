import VerifiedIcon from '@/public/icons/about_verified.svg';
import ReviewIcon from '@/public/icons/review_icon.svg';
import StatisticCommentsIcon from '@/public/icons/statistic_commnets.svg';
import StatisticWarningIcon from '@/public/icons/statistic_warning.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { StarsGroup } from '@/shared/ui/stars.group';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export const VerifiedItem = ({
    position,
    avatarURL,
    username,
    starsRate,
    ratePercent,
    reports,
    reviews,
    about,
    projectLink,
}: {
    position: number;
    avatarURL: string;
    username: string;
    starsRate: number;
    ratePercent: number;
    reports: number;
    reviews: number;
    about: string;
    projectLink: string;
}) => {
    const { t } = useTranslation();

    return (
        <Col bgcolor={'#FFFFFF'} borderRadius={'8px'} width={'100%'} pr={2.5}>
            <Row justifyContent={'space-between'} py={1.75}>
                <Row gap={2}>
                    <Box
                        width={34}
                        height={39}
                        sx={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}
                        bgcolor={'#ECF2FF'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography fontWeight={700} fontSize={16} color="black">
                            {position}
                        </Typography>
                    </Box>

                    <Row gap={2} height={75}>
                        <Image src={avatarURL} alt="avatar" width={75} height={75} style={{ borderRadius: '6px' }} />

                        <Col alignItems={'flex-start'} height={'100%'} justifyContent={'space-around'}>
                            <Typography fontWeight={500} fontSize={20}>
                                {username}
                            </Typography>

                            <StarsGroup rating={starsRate} />
                        </Col>
                    </Row>
                </Row>

                <Row gap={6}>
                    <RateCircle percent={ratePercent} />

                    <StatisticItem
                        title={t('main.verified.statistic_profit')}
                        icon={<StatisticWarningIcon />}
                        bgcolor={'#37E585'}
                        value={reports}
                    />

                    <StatisticItem
                        title={t('main.verified.statistic_comments')}
                        icon={<StatisticCommentsIcon />}
                        bgcolor={'#97A6A7'}
                        value={reviews}
                    />
                </Row>
            </Row>

            <Col pl={'50px'} pb={1.75} gap={2}>
                <Row gap={4} alignItems={'flex-start'}>
                    <TraderAbout about={about} />

                    <ReviewButton />
                </Row>

                <Row gap={1} justifyContent={'flex-start'}>
                    <Typography fontWeight={500}>{t('main.verified.project_link')}</Typography>

                    <Typography fontWeight={700} color={'#37E585'}>
                        {projectLink}
                    </Typography>
                </Row>
            </Col>
        </Col>
    );
};

const RateCircle = ({ percent }: { percent: number }) => {
    const { t } = useTranslation();

    return (
        <Col gap={1}>
            <Typography fontWeight={500} fontSize={14}>
                {t('main.verified.statistic_rate')}
            </Typography>

            <Box
                width={48}
                height={48}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                bgcolor={'#ECF2FF'}
                position={'relative'}
                overflow={'hidden'}
                sx={{ background: `conic-gradient(#37E585 0% ${percent}%, #ECF2FF ${percent}% 100%)` }}
            >
                <Box
                    width={40}
                    height={40}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'50%'}
                    bgcolor={'#FFFFFF'}
                >
                    <Typography fontWeight={700}>{percent}</Typography>
                </Box>
            </Box>
        </Col>
    );
};

const StatisticItem = ({
    title,
    icon,
    value,
    bgcolor,
}: {
    title: string;
    icon: ReactNode;
    value: number;
    bgcolor: string;
}) => {
    return (
        <Col gap={1} alignItems={'center'}>
            <Typography fontWeight={500} fontSize={14}>
                {title}
            </Typography>

            <Row
                bgcolor={bgcolor}
                borderRadius={'9px'}
                width={130}
                height={48}
                justifyContent={'space-between'}
                px={2.5}
                py={1.5}
            >
                {icon}

                <Typography color="white" fontSize={16} fontWeight={700}>
                    {value}
                </Typography>
            </Row>
        </Col>
    );
};

const TraderAbout = ({ about }: { about: string }) => {
    return (
        <Box position={'relative'} borderRadius={'9px'} border={'3px solid #37E585'} p={1.5}>
            <Box position={'absolute'} top={'-10px'} left={'-10px'}>
                <VerifiedIcon />
            </Box>

            <Typography>{about}</Typography>
        </Box>
    );
};

const ReviewButton = () => {
    const { t } = useTranslation();

    return (
        <Button sx={{ bgcolor: '#DFEBF7', borderRadius: '8px', p: 2, minWidth: '130px' }}>
            <Row gap={2}>
                <Typography fontWeight={700} fontSize={16} color={'#449FE8'}>
                    {t('main.verified.button_review')}
                </Typography>

                <ReviewIcon />
            </Row>
        </Button>
    );
};
