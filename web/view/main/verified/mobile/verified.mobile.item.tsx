import VerifiedIcon from '@/public/icons/about_verified.svg';
import StatisticCommentsIcon from '@/public/icons/statistic_commnets.svg';
import VerifiedProfitIcon from '@/public/icons/verified_profit.svg';
import { VerifiedDemoProfileItem } from '@/shared/config/api/api.schemas';
import { Col, Row } from '@/shared/ui/boxes';
import { StarsGroup } from '@/shared/ui/stars.group';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export const VerifiedMobileItem = ({ project }: { project: VerifiedDemoProfileItem }) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Col bgcolor={'#FFFFFF'} borderRadius={'8px'} width={'100%'} pr={1.5} sx={{cursor: 'pointer'}} onClick={() => router.push(`/verified/${project.url}`)}>
            <Row justifyContent={'space-between'} py={1.75}>
                <Box
                    width={24}
                    height={28}
                    sx={{ borderTopRightRadius: '7px', borderBottomRightRadius: '7px' }}
                    bgcolor={'#3BB974'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography fontWeight={700} fontSize={14} color="white">
                        {project.positionTop}
                    </Typography>
                </Box>

                <Row gap={1}>
                    <Image src={project.avatar_url} alt="avatar" width={45} height={45} style={{ borderRadius: '6px' }} />

                    <Col alignItems={'flex-start'} height={'100%'} justifyContent={'space-around'}>
                        <Typography fontWeight={500} fontSize={14}>
                            {project.name}
                        </Typography>

                      
                        <StarsGroup rating={project.starRate} />
                    </Col>
                </Row>

                <Button sx={{ py: 1.25, px: 2, bgcolor: '#3BB974', borderRadius: '8px' }}>
                    <Typography fontSize={16} fontWeight={700} color="white">
                        Обзор
                    </Typography>
                </Button>
            </Row>

            <Row pl={1.5} justifyContent={'space-between'}>
                <RateCircle percent={project.rate} />

                <StatisticMobileItem
                    title={t('main.scammers.statistic_comments')}
                    icon={<StatisticCommentsIcon />}
                    bgcolor={'#6a7474'}
                    value={project.reviews}
                />

                <StatisticMobileItem
                    title={'Прибыль %'}
                    icon={<VerifiedProfitIcon />}
                    bgcolor={'#3BB974'}
                    value={project.profit}
                />
            </Row>

            <Box pl={1.5} pt={2}>
                <TraderAbout about={project.shortDescription} />
            </Box>

            <Row sx={{cursor: 'pointer'}} gap={1} pl={1.5} my={1.5} justifyContent={'flex-start'} onClick={() => router.push(`https://t.me/${project.tgUsername}`)}>
                <Typography fontSize={14} fontWeight={700}>
                    Ссылка:
                </Typography>

                <Typography fontSize={14} fontWeight={700} color={'#3BB974'}>
                    t.me/@{project.tgUsername}
                </Typography>
            </Row>
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
                sx={{ background: `conic-gradient(#3BB974 0% ${percent}%, #ECF2FF ${percent}% 100%)` }}
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

const StatisticMobileItem = ({
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
                width={110}
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
        <Box position={'relative'} borderRadius={'9px'} border={'3px solid #3BB974'} p={1.5}>
            <Box position={'absolute'} top={'-10px'} left={'-10px'}>
                <VerifiedIcon />
            </Box>

            <Typography fontWeight={300}>{about}</Typography>
        </Box>
    );
};
