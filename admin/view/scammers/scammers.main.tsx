'use client';
import { ScammerDemoProfileItem } from '@/config/api/api.schemas';
import { useScammersGetList } from '@/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const ScammersMain = () => {
    const router = useRouter();
    const { data } = useScammersGetList();

    if (data === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <Row justifyContent={'space-between'}>
                <Typography fontSize={21} fontWeight={700}>
                    Список проектов мошенников
                </Typography>

                <Button onClick={() => router.push('/scammers/add')} variant="contained" color="primary">
                    Добавить мошенника
                </Button>
            </Row>

            <Col gap={2}>
                {data.items.map((s, i) => (
                    <ScammerDemoCard {...s} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const ScammerDemoCard = (scammer: ScammerDemoProfileItem) => {
    const router = useRouter();

    return (
        <Row
            onClick={() => router.push(`/scammers/edit/${scammer.id}`)}
            width={'100%'}
            gap={4}
            justifyContent={'flex-start'}
            bgcolor={'#ffffff'}
            p={2}
            borderRadius={'6px'}
        >
            <Typography fontWeight={700}>{scammer.positionTop}</Typography>

            <Typography fontWeight={700}>{scammer.name}</Typography>
        </Row>
    );
};
