'use client';
import { useScammersGetTopFive } from '@/shared/config/api/scammers/scammers';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Button, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ScammerMobileItem } from './mobile/scammers.mobile.item';
import { ScammerItem } from './scammers.item';

export const ScammersList = ({ scammersTopFiveInitialData }: { scammersTopFiveInitialData: any }) => {
    const { data, isPending } = useScammersGetTopFive({ query: { initialData: scammersTopFiveInitialData } });
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    if (isPending) return <LoadingList />;
    if (data === undefined) return null;

    return (
        <Col p={isSm ? 1.5 : 2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            {data.items
                .slice(0, 5)
                .map((s, i) =>
                    isSm ? <ScammerMobileItem project={s} key={i} /> : <ScammerItem project={s} key={i} />,
                )}

            <Row justifyContent={'space-between'}>
                <FullListButton text={t('main.button_full_list')} />

                <Typography sx={{ display: isSm ? 'none' : null }} color={'#5297FF'} fontSize={16} fontWeight={700}>
                    {t('main.button_how_review')}
                </Typography>
            </Row>
        </Col>
    );
};

const FullListButton = ({ text }: { text: string }) => {
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Button
            onClick={() => router.push('/scammers')}
            sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: isSm ? '100%' : 250, minHeight: 50 }}
        >
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};

export const LoadingList = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            width={'100%'}
            px={isSm ? 1.5 : 2.5}
            py={25}
            bgcolor={'#ECF2FF'}
            borderRadius={'19px'}
        >
            <CircularProgress />
        </Box>
    );
};
