'use client'
import DescriptionIcon from '@/public/icons/profile_description_icon.svg';
import LinkIcon from '@/public/icons/profile_link_icon.svg';
import TimeIcon from '@/public/icons/profile_time_icon.svg';
import VerifiedIcon from '@/public/icons/verified_profile_avatar_icon.svg';
import { ScammerProfileItem, VerifiedProfileItem } from '@/shared/config/api/api.schemas';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProfileParams {
    one: string,
    two: string,
    three: string
}

export const VerifiedStatsProfile = ({ profile }: { profile: VerifiedProfileItem }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const [params, setParams] = useState<ProfileParams | undefined>(undefined)

    useEffect(() => {
        if(profile.params !== '') {
            setParams(JSON.parse(profile.params))
        }
    }, [profile.params])

    return (
        <Col
            px={1.5}
            py={2}  
            bgcolor={'#3BB974'}
            borderRadius={'14px'}
            minWidth={isSm ? '100%' : '308px'}
            gap={isSm ? 2 : 1}
        >
            <ProfileAvatar url={profile.avatar_url} name={profile.name} />
            <AttentionButton />

            <Col alignItems={'flex-start'}>
                <DescriptionItem text={params?.one ?? ''} />
                <DescriptionItem text={params?.two ?? ''} />
                <DescriptionItem text={params?.three ?? ''} />
            </Col>

            <Col gap={1}>
                <Row justifyContent={'space-between'}>
                    <Row gap={1}>
                        <TimeIcon />
                        <Typography fontSize={'16px'} color="white" fontWeight={700}>
                            Проверен:
                        </Typography>
                    </Row>

                    <Typography color="white" fontSize={'16px'}>
                        {dayjs(profile.reviewDate).format('DD.MM.YYYY')}
                    </Typography>
                </Row>

                <Row justifyContent={'space-between'}>
                    <Row gap={1}>
                        <LinkIcon />
                        <Typography fontSize={'16px'} color="white" fontWeight={700}>
                            Канал:
                        </Typography>
                    </Row>

                    <Typography color="white" fontSize={'16px'}>
                        t.me/@{profile.tgUsername}
                    </Typography>
                </Row>
            </Col>

            <ChannelButton tgUsername={profile.tgUsername} />
        </Col>
    );
};

const ProfileAvatar = ({ url, name }: { url: string; name: string }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Col gap={1} width={'100%'} position={'relative'} alignItems={'center'}>
            <Image
                src={url}
                alt={'avatar'}
                width={175}
                height={175}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'cover',
                    borderRadius: '50%',
                    border: '5px solid #37E585',
                }}
            />

            <Typography fontSize={'24px'} fontWeight={700} color="white">
                {name}
            </Typography>

            <Box display={isSm ? 'none' : 'block'} position={'absolute'} right={65} bottom={45}>
                <VerifiedIcon />
            </Box>
        </Col>
    );
};

const AttentionButton = () => {
    return (
        <Box
            minHeight={'42px'}
            width={'100%'}
            bgcolor={'#37E585'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'9px'}
        >
            <Typography fontSize={'16px'} fontWeight={700} color={'white'}>
                ПРОВЕРЕННЫЙ ПРОЕКТ
            </Typography>
        </Box>
    );
};

const DescriptionItem = ({ text }: { text: string }) => {
    return (
        <Row gap={1}>
            <DescriptionIcon />

            <Typography color="white" fontSize={'16px'}>
                {text}
            </Typography>
        </Row>
    );
};

const ChannelButton = ({ tgUsername }: { tgUsername: string }) => {
    const router = useRouter();
    return (
        <Button
            onClick={() => router.push(`https://t.me/${tgUsername}`)}
            sx={{
                bgcolor: '#FFFFFF',
                minHeight: '43px',
                minWidth: '100%',
                borderRadius: '9px',
            }}
        >
            <Typography fontWeight={500} color={'#3BB974'} fontSize={'16px'}>
                Подписаться
            </Typography>
        </Button>
    );
};
