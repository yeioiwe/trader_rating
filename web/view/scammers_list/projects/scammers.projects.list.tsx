import { ScammerDemoProfileItem, ScammerDemoProfileItemCategory } from '@/shared/config/api/api.schemas';
import { useScammersGetList } from '@/shared/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ScammerProjectItem } from './scammers.projects.item';
import { ScammersListTypeSort } from './scammers.projects.sort';
import { ScammersProjectsTitle } from './scammers.projects.title';

export const ScammerProjectsList = () => {
    const { data } = useScammersGetList();
    const [sort, setSort] = useState<ScammerDemoProfileItemCategory | undefined>();
    const [projects, setProjects] = useState<ScammerDemoProfileItem[] | undefined>();

    useEffect(() => {
        if (sort !== undefined) {
            const sortedProjects = data?.items.filter(p => p.category === sort);

            setProjects(sortedProjects);
        } else {
            setProjects(data?.items);
        }
    }, [sort]);

    useEffect(() => {
        if (data !== undefined) {
            setProjects(data.items);
        }
    }, [data?.items]);

    if (projects === undefined) return null;

    return (
        <Col gap={2.5}>
            <ScammersListTypeSort sort={sort} setSort={setSort} />

            <Col gap={2}>
                <ScammersProjectsTitle />

                <Col p={2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
                    {projects.map((p, i) => (
                        <ScammerProjectItem project={p} key={i} />
                    ))}

                    <Row justifyContent={'center'}>
                        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: 250, minHeight: 50 }}>
                            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                                Загрузить ещё
                            </Typography>
                        </Button>
                    </Row>
                </Col>
            </Col>
        </Col>
    );
};
