import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ScammerMobileItem } from './mobile/scammers.mobile.item';
import { ScammerItem } from './scammers.item';

export const ScammersList = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <Col p={isSm ? 1.5 : 2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            {demoScammerUsers.map((s, i) =>
                isSm ? <ScammerMobileItem {...s} key={i} /> : <ScammerItem {...s} key={i} />,
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
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: isSm ? '100%' : 250, minHeight: 50 }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};

// DEMO USERS

interface DemoScammerUser {
    id: number;
    position: number;
    avatarURL: string;
    username: string;
    starsRate: number;
    ratePercent: number;
    reports: number;
    reviews: number;
    about: string;
    projectLink: string;
}

const demoScammerUsers: DemoScammerUser[] = [
    {
        id: 1,
        position: 1,
        avatarURL: '/avatar.jpg',
        username: 'TopTrader Project',
        starsRate: 3,
        ratePercent: 23,
        reports: 282,
        reviews: 188,
        about: 'После внесения депозита начались проблемы: вывод средств оказался невозможным, а поддержка не отвечала на запросы. В результате мои деньги были просто заморожены.',
        projectLink: 't.me/@2XBET',
    },
    {
        id: 2,
        position: 2,
        avatarURL: '/avatar.jpg',
        username: 'CryptoGuruX',
        starsRate: 1,
        ratePercent: 12,
        reports: 410,
        reviews: 327,
        about: 'Вложил деньги, но в итоге потерял все. Обещания не соответствуют реальности, а сайт перестал работать. Призываю всех избегать этого проекта.',
        projectLink: 't.me/@CryptoScamX',
    },
    {
        id: 3,
        position: 3,
        avatarURL: '/avatar.jpg',
        username: 'FastMoneyPro',
        starsRate: 2,
        ratePercent: 18,
        reports: 153,
        reviews: 120,
        about: 'Долго не выводил средства, а после обращения в поддержку просто заблокировали мой аккаунт. Очень разочарован в этом проекте.',
        projectLink: 't.me/@FastMoneyPro_Official',
    },
    {
        id: 4,
        position: 4,
        avatarURL: '/avatar.jpg',
        username: 'InvestSafeGroup',
        starsRate: 4,
        ratePercent: 32,
        reports: 260,
        reviews: 214,
        about: 'Сперва все шло хорошо, но потом начались задержки с выводом и неадекватная поддержка. В итоге, не смог забрать свои деньги.',
        projectLink: 't.me/@InvestSafeGroup',
    },
    {
        id: 5,
        position: 5,
        avatarURL: '/avatar.jpg',
        username: 'ProfitVault',
        starsRate: 5,
        ratePercent: 50,
        reports: 500,
        reviews: 450,
        about: 'Очень сильно потерял деньги. Мошенники, которые обманывают людей, используя ложные схемы и фальшивые обещания.',
        projectLink: 't.me/@ProfitVault_Official',
    },
];
