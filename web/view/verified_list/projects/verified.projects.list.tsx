import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { VerifiedHiddenProject } from './verified.hidden.item';
import { VerifiedListTypeSort } from './verified.projects.sort';
import { VerifiedProjectsTitle } from './verified.projects.title';
import { useVerifiedGetList } from '@/shared/config/api/verified/verified';
import theme from '@/shared/config/theme/theme';
import { VerifiedMobileItem } from '@/view/main/verified/mobile/verified.mobile.item';
import { VerifiedItem } from '@/view/main/verified/verified.item';

export const VerfiedProjectsList = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { data } = useVerifiedGetList();
    const [sort, setSort] = useState<VerifiedSortType>(sortParams[0]);

    return (
        <Col gap={2.5}>
            <VerifiedListTypeSort sort={sort} setSort={setSort} />

            <Col gap={2}>
                <VerifiedProjectsTitle />

                <Col p={2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
                    {data?.items.map((s, i) =>
                        isSm ? <VerifiedMobileItem project={s} key={i} /> : <VerifiedItem project={s} key={i} />,
                    )}

                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject />

                    {/* <Row justifyContent={'center'}>
                        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: 250, minHeight: 50 }}>
                            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                                Загрузить ещё
                            </Typography>
                        </Button>
                    </Row> */}
                </Col>
            </Col>
        </Col>
    );
};

//demo sort types
export interface VerifiedSortType {
    id: number;
    name: string;
}

export const sortParams: VerifiedSortType[] = [
    { id: 1, name: 'Весь список' },
    { id: 2, name: 'Инвестиции' },
    { id: 3, name: 'Трейдеры' },
    { id: 4, name: 'Капперы' },
    { id: 5, name: 'Крипто игры' },
];

// demo users type

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
    {
        id: 6,
        position: 6,
        avatarURL: '/avatar.jpg',
        username: 'ProfitVault',
        starsRate: 5,
        ratePercent: 50,
        reports: 500,
        reviews: 450,
        about: 'Очень сильно потерял деньги. Мошенники, которые обманывают людей, используя ложные схемы и фальшивые обещания.',
        projectLink: 't.me/@ProfitVault_Official',
    },
    {
        id: 7,
        position: 7,
        avatarURL: '/avatar.jpg',
        username: 'ProfitVault',
        starsRate: 5,
        ratePercent: 50,
        reports: 500,
        reviews: 450,
        about: 'Очень сильно потерял деньги. Мошенники, которые обманывают людей, используя ложные схемы и фальшивые обещания.',
        projectLink: 't.me/@ProfitVault_Official',
    },
    {
        id: 8,
        position: 8,
        avatarURL: '/avatar.jpg',
        username: 'ProfitVault',
        starsRate: 5,
        ratePercent: 50,
        reports: 500,
        reviews: 450,
        about: 'Очень сильно потерял деньги. Мошенники, которые обманывают людей, используя ложные схемы и фальшивые обещания.',
        projectLink: 't.me/@ProfitVault_Official',
    },
    {
        id: 9,
        position: 9,
        avatarURL: '/avatar.jpg',
        username: 'ProfitVault',
        starsRate: 5,
        ratePercent: 50,
        reports: 500,
        reviews: 450,
        about: 'Очень сильно потерял деньги. Мошенники, которые обманывают людей, используя ложные схемы и фальшивые обещания.',
        projectLink: 't.me/@ProfitVault_Official',
    },
    {
        id: 10,
        position: 10,
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
