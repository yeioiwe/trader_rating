import ScammerListIcon from '@/public/icons/profile_scammer_list_icon.svg';
import { useScammersGetList } from '@/shared/config/api/scammers/scammers';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { ScammerMobileItem } from '@/view/main/scammers/mobile/scammers.mobile.item';
import { ScammerProjectItem } from '@/view/scammers_list/projects/scammers.projects.item';
import { Typography, useMediaQuery } from '@mui/material';

export const ScammerProfileList = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { data } = useScammersGetList();

    if (data === undefined) return null;

    return (
        <Col gap={2}>
            <Row justifyContent={'flex-start'} gap={1.5}>
                <ScammerListIcon />

                <Typography fontSize={24} fontWeight={700}>
                    Проекты мошенники
                </Typography>
            </Row>

            <Col bgcolor={'#ECF2FF'} borderRadius={'9px'} py={2.25} px={1.75} gap={2}>
                {data.items
                    .slice(0, 5)
                    .map((s, i) =>
                        isSm ? <ScammerMobileItem project={s} key={i} /> : <ScammerProjectItem project={s} key={i} />,
                    )}
            </Col>
        </Col>
    );
};
