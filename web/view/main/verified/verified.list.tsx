'use client';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { VerifiedHiddenProject } from '@/view/verified_list/projects/verified.hidden.item';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { VerifiedMobileItem } from './mobile/verified.mobile.item';
import { VerifiedItem } from './verified.item';
import { useVerifiedGetList } from '@/shared/config/api/verified/verified';
import { useRouter } from 'next/navigation';

export const VerifiedList = () => {
    const { data } = useVerifiedGetList();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <Col p={isSm ? 1.5 : 2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            {data?.items.map((s, i) =>
                isSm ? <VerifiedMobileItem project={s} key={i} /> : <VerifiedItem project={s} key={i} />,
            )}
            {/* <VerifiedHiddenProject />
            <VerifiedHiddenProject />
            <VerifiedHiddenProject />
            <VerifiedHiddenProject /> */}

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
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    return (
        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: isSm ? '100%' : 250, minHeight: 50 }} onClick={() => router.push('/verified')}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};

