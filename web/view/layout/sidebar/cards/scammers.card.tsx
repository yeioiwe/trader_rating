'use client';
import WarningIcon from '@/public/icons/layout_warning.svg';
import { ScammerDemoProfileItem, ScammerDemoProfileItemStarRate } from '@/shared/config/api/api.schemas';
import { useScammersGetList } from '@/shared/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { StarsGroup } from '@/shared/ui/stars.group';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const ScammersCard = () => {
    const { data } = useScammersGetList();
    const { t } = useTranslation();
    const [scammers, setScammers] = useState<ScammerDemoProfileItem[] | undefined>();

    useEffect(() => {
        if (data?.items !== undefined) {
            const top5Scammers = data.items.slice(0, 5);
            setScammers(top5Scammers);
        }
    }, [data?.items]);

    if (scammers === undefined) return null;

    return (
        <SidebarCard bgcolor={'#ECF5FF'} icon={<WarningIcon />}>
            <Col gap={2}>
                <Col gap={0.5}>
                    <Typography fontSize={20} fontWeight={700}>
                        {t('sidebar.scammers.title')}
                    </Typography>

                    <Typography color="#97A6A7" fontSize={16}>
                        {t('sidebar.scammers.description')}
                    </Typography>
                </Col>

                <Col gap={1}>
                    {scammers.map((p, i) => (
                        <ScammerCard
                            key={i}
                            avatar_url={p.avatar_url}
                            name={p.name}
                            positionTop={p.positionTop}
                            profileUrl={p.url}
                            starRate={p.starRate}
                        />
                    ))}
                </Col>

                <AllListButton />
            </Col>
        </SidebarCard>
    );
};

const ScammerCard = ({
    name,
    starRate,
    avatar_url,
    positionTop,
    profileUrl,
}: {
    name: string;
    starRate: ScammerDemoProfileItemStarRate;
    avatar_url: string;
    positionTop: number;
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
                    {positionTop}
                </Typography>
            </Box>

            <Row gap={2}>
                <Image
                    style={{ borderRadius: '6px', backgroundPosition: 'center', objectFit: 'cover' }}
                    src={avatar_url}
                    alt="avater"
                    width={40}
                    height={40}
                />

                <Col>
                    <Typography fontSize={14} fontWeight={700}>
                        {name}
                    </Typography>

                    <StarsGroup rating={starRate} />
                </Col>
            </Row>

            <Button
                onClick={() => router.push(`/scammers/${profileUrl}`)}
                sx={{ py: 1.25, px: 2, bgcolor: '#C53D3D', borderRadius: '8px' }}
            >
                <Typography fontSize={16} fontWeight={700} color="white">
                    {t('sidebar.scammers.button_card')}
                </Typography>
            </Button>
        </Row>
    );
};

export const AllListButton = () => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <Button onClick={() => router.push('/scammers')} sx={{ bgcolor: '#FFFFFF', py: 1.75, borderRadius: '13px' }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {t('sidebar.scammers.button')}
            </Typography>
        </Button>
    );
};
