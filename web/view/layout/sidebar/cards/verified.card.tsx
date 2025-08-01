'use client';
import VerifiedIcon from '@/public/icons/layout_verified.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';
import { useVerifiedGetTopFive } from '@/shared/config/api/verified/verified';
import { useRouter } from 'next/navigation';
import { StarsGroup } from '@/shared/ui/stars.group';
import { ScammerDemoProfileItemStarRate } from '@/shared/config/api/api.schemas';

export const VerifiedsCard = () => {
    const { t } = useTranslation();
    const { data } = useVerifiedGetTopFive();

    return (
        <SidebarCard bgcolor={'#ECF5FF'} icon={<VerifiedIcon />}>
            <Col gap={2}>
                <Col gap={0.5}>
                    <Typography fontSize={20} fontWeight={700}>
                        {t('sidebar.verified.title')}
                    </Typography>

                    <Typography color="#97A6A7" fontSize={16}>
                        {t('sidebar.verified.description')}
                    </Typography>
                </Col>

                <Col gap={1}>
                    {data?.items.map((p, i) => (
                        <VerifiedCard
                            key={i}
                            name={p.name}
                            position={p.positionTop}
                            rating={p.starRate}
                            avatarUrl={p.avatar_url}
                            profileUrl={p.url}
                        />
                    ))}
                </Col>

                <AllListButton />
            </Col>
        </SidebarCard>
    );
};

const VerifiedCard = ({
    name,
    rating,
    avatarUrl,
    position,
    profileUrl,
}: {
    name: string;
    rating: ScammerDemoProfileItemStarRate;
    avatarUrl: string;
    position: number;
    profileUrl: string;
}) => {
    const { t } = useTranslation();
    const router = useRouter();
    return (
        <Row
            position="relative"
            bgcolor={'white'}
            pl={4}
            py={1}
            pr={1.75}
            justifyContent={'space-between'}
            borderRadius={'8px'}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                left={'-16px'}
                position={'absolute'}
                width={32}
                height={32}
                bgcolor={'#ECF2FF'}
                borderRadius={'50%'}
            >
                <Typography fontWeight={700} fontSize={14}>
                    {position}
                </Typography>
            </Box>

            <Row gap={2}>
                <Image style={{ borderRadius: '6px' }} src={avatarUrl} alt="avater" width={40} height={40} />

                <Col>
                    <Typography fontSize={14} fontWeight={700}>
                        {name}
                    </Typography>

                    <StarsGroup rating={rating} />
                </Col>
            </Row>

            <Button
                sx={{ py: 1.25, px: 2, bgcolor: '#3BB974', borderRadius: '8px' }}
                onClick={() => router.push(`/verified/${profileUrl}`)}
            >
                <Typography fontSize={16} fontWeight={700} color="white">
                    {t('sidebar.verified.button_card')}
                </Typography>
            </Button>
        </Row>
    );
};

const AllListButton = () => {
    const { t } = useTranslation();
    const router = useRouter();
    return (
        <Button sx={{ bgcolor: '#FFFFFF', py: 1.75, borderRadius: '13px' }} onClick={() => router.push('/verified')}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {t('sidebar.verified.button')}
            </Typography>
        </Button>
    );
};
