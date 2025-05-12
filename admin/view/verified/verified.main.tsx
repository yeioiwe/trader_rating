'use client';
import { VerifiedDemoProfileItem } from '@/config/api/api.schemas';
import { useVerifiedGetList, useVerifiedUpdatePosition } from '@/config/api/verified/verified';
import { Col, Row } from '@/shared/ui/boxes';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

export const VerifiedMain = () => {
    const router = useRouter();
    const { data } = useVerifiedGetList();
    const { mutate } = useVerifiedUpdatePosition();
    const [projects, setProjects] = useState<VerifiedDemoProfileItem[]>();

    useEffect(() => {
        setProjects(data?.items);
    }, [data]);

    const handleUpdatePosition = () => {
        if (!projects) return;
        const newPosition = projects.map(({ id, positionTop }) => ({ id, positionTop }));

        mutate({
            data: {
                items: newPosition,
            },
        });
    };

    if (projects === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <Row justifyContent={'space-between'}>
                <Row gap={2}>
                    <Typography fontSize={21} fontWeight={700}>
                        Список проверенных проектов
                    </Typography>

                    <Tooltip title="Список отображается исходя из ТОПа, который будет видеть на сайте пользователь. Чтобы изменить порядок проектов (при этом сменится ТОП) - нужно перетаскивать проекты вертикально. После того как сформируете желаемый список, нужно нажать кнопку .Обновить. - дабы изменения сохранились в базу данных.">
                        <InfoIcon />
                    </Tooltip>
                </Row>

                <Button onClick={() => router.push('/verified/add')} variant="contained" color="primary">
                    Добавить проект
                </Button>
            </Row>

            <ReactSortable
                list={projects}
                setList={newList => {
                    const updatedProjects = newList.map((project, index) => ({
                        ...project,
                        positionTop: index + 1,
                    }));

                    setProjects(updatedProjects);
                }}
                animation={150}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                }}
            >
                {projects.map(project => (
                    <VerifiedDemoCard key={project.id} {...project} />
                ))}
            </ReactSortable>

            <Row justifyContent={'flex-end'}>
                <Button onClick={() => handleUpdatePosition()} variant="contained" color="primary">
                    Обновить
                </Button>
            </Row>
        </Col>
    );
};

const VerifiedDemoCard = (verified: VerifiedDemoProfileItem) => {
    const router = useRouter();

    return (
        <Row
            onClick={() => router.push(`/verified/edit/${verified.id}`)}
            width={'100%'}
            gap={4}
            justifyContent={'space-between'}
            bgcolor={verified.visible === 'VISIBLE' ? '#ffffff' : 'rgb(212 212 212)'}
            py={2}
            px={4}
            borderRadius={'6px'}
            border={'2px solid rgb(212 212 212)'}
            sx={{ cursor: 'pointer' }}
        >
            <Row justifyContent={'flex-start'} gap={4}>
                <Typography fontWeight={700}>{verified.positionTop}</Typography>

                <Row gap={2}>
                    <PersonIcon />
                    <Typography fontWeight={700}>{verified.name}</Typography>
                </Row>

                <Row gap={2}>
                    <BusinessCenterIcon />
                    <Typography>{verified.category}</Typography>
                </Row>
            </Row>

            <Row gap={2} sx={{ color: '#2892c4' }}>
                <Typography color="#2892c4" fontWeight={700}>
                    t.me/{verified.tgUsername}
                </Typography>

                <TelegramIcon />
            </Row>
        </Row>
    );
};
