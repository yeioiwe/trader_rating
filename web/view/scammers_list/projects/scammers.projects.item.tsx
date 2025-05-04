import ReviewIcon from '@/public/icons/arrow_icon.svg';
import AboutIcon from '@/public/icons/scammer_about.svg';
import StatisticCommentsIcon from '@/public/icons/statistic_commnets.svg';
import StatisticWarningIcon from '@/public/icons/statistic_warning.svg';
import { ScammerDemoProfileItem } from '@/shared/config/api/api.schemas';
import { Col, Row } from '@/shared/ui/boxes';
import { StarsGroup } from '@/shared/ui/stars.group';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export const ScammerProjectItem = ({ project }: { project: ScammerDemoProfileItem }) => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <Col
            onClick={() => router.push(`/scammers/${project.url}`)}
            sx={{ cursor: 'pointer' }}
            bgcolor={'#FFFFFF'}
            borderRadius={'8px'}
            width={'100%'}
            pr={2.5}
        >
            <Row justifyContent={'space-between'} py={1.75}>
                <Row gap={2}>
                    <Box
                        width={34}
                        height={39}
                        sx={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}
                        bgcolor={'#C53D3D'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography fontWeight={700} fontSize={16} color="white">
                            {project.positionTop}
                        </Typography>
                    </Box>

                    <Row gap={2} height={75}>
                        <Image
                            src={project.avatar_url}
                            alt="avatar"
                            width={75}
                            height={75}
                            style={{ borderRadius: '6px', backgroundPosition: 'center', objectFit: 'cover' }}
                        />

                        <Col alignItems={'flex-start'} height={'100%'} justifyContent={'space-around'}>
                            <Typography fontWeight={500} fontSize={20}>
                                {project.name}
                            </Typography>

                            <StarsGroup rating={project.starRate} />
                        </Col>
                    </Row>
                </Row>

                <Row gap={6}>
                    <RateCircle percent={project.rate} />

                    <StatisticItem
                        title={t('main.scammers.statistic_reports')}
                        icon={<StatisticWarningIcon />}
                        bgcolor={'#C53D3D'}
                        value={project.reports}
                    />

                    <StatisticItem
                        title={t('main.scammers.statistic_comments')}
                        icon={<StatisticCommentsIcon />}
                        bgcolor={'#6a7474'}
                        value={project.reviews}
                    />
                </Row>
            </Row>

            <Col pl={'50px'} pb={1.75} gap={2}>
                <Row gap={4} alignItems={'flex-start'}>
                    <TraderAbout about={project.shortDescription} />

                    <ReviewButton url={project.url} />
                </Row>

                <Row gap={1} justifyContent={'flex-start'}>
                    <Typography fontWeight={700}>{t('main.scammers.project_link')}</Typography>

                    <Typography fontWeight={700} color={'#C53D3D'}>
                        t.me/{project.tgUsername}
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
                {t('main.scammers.statistic_rate')}
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
                sx={{ background: `conic-gradient(#C53D3D 0% ${percent}%, #ECF2FF ${percent}% 100%)` }}
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
        <Box width={'100%'} position={'relative'} borderRadius={'9px'} border={'3px solid #C53D3D'} p={1.5}>
            <Box position={'absolute'} top={'-10px'} left={'-10px'}>
                <AboutIcon />
            </Box>

            <Typography fontWeight={300}>{about}</Typography>
        </Box>
    );
};

const ReviewButton = ({ url }: { url: string }) => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push(`/scammers/${url}`)}
            sx={{ bgcolor: '#DFEBF7', borderRadius: '8px', p: 2, minWidth: '130px' }}
        >
            <Row gap={2}>
                <Typography fontWeight={500} fontSize={16} color={'#449FE8'}>
                    {t('main.scammers.button_review')}
                </Typography>

                <ReviewIcon />
            </Row>
        </Button>
    );
};
