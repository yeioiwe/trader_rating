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

                    {/* <VerifiedHiddenProject />
                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject />
                    <VerifiedHiddenProject /> */}

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
