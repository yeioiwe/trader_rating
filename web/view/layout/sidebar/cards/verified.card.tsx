import VerifiedIcon from '@/public/icons/layout_verified.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { StarsGroup } from '@/shared/ui/stars.group';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const VerifiedsCard = () => {
    const { t } = useTranslation();

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
                    <VerifiedCard
                        name="TopTrader"
                        position={1}
                        rating={1}
                        avatarUrl={'/avatar.jpg'}
                        profileUrl={'google.com'}
                    />
                    <VerifiedCard
                        name="TopTrader"
                        position={2}
                        rating={1}
                        avatarUrl={'/avatar.jpg'}
                        profileUrl={'google.com'}
                    />
                    <VerifiedCard
                        name="TopTrader"
                        position={3}
                        rating={2}
                        avatarUrl={'/avatar.jpg'}
                        profileUrl={'google.com'}
                    />
                    <VerifiedCard
                        name="TopTrader"
                        position={4}
                        rating={2}
                        avatarUrl={'/avatar.jpg'}
                        profileUrl={'google.com'}
                    />
                    <VerifiedCard
                        name="TopTrader"
                        position={5}
                        rating={3}
                        avatarUrl={'/avatar.jpg'}
                        profileUrl={'google.com'}
                    />
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
    rating: number;
    avatarUrl: string;
    position: number;
    profileUrl: string;
}) => {
    const { t } = useTranslation();

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

            <Button sx={{ py: 1.25, px: 2, bgcolor: '#37E585', borderRadius: '8px' }}>
                <Typography fontSize={16} fontWeight={700} color="white">
                    {t('sidebar.verified.button_card')}
                </Typography>
            </Button>
        </Row>
    );
};

const AllListButton = () => {
    const { t } = useTranslation();

    return (
        <Button sx={{ bgcolor: '#FFFFFF', py: 1.75, borderRadius: '13px' }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {t('sidebar.verified.button')}
            </Typography>
        </Button>
    );
};
