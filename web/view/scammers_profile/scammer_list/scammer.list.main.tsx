import ScammerListIcon from '@/public/icons/profile_scammer_list_icon.svg';
import { useScammersGetList } from '@/shared/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { ScammerProjectItem } from '@/view/scammers_list/projects/scammers.projects.item';
import { Typography } from '@mui/material';

export const ScammerProfileList = () => {
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
                {data.items.slice(0, 3).map((p, i) => (
                    <ScammerProjectItem project={p} key={i} />
                ))}
            </Col>
        </Col>
    );
};
