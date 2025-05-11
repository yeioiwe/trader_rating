'use client';
import { getPagesGetLawyerVisibleQueryKey, usePagesEditLawyerProfile, usePagesGetLawyerProfile, usePagesGetLawyerVisible, usePagesToggleLawyerVisible } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';
import { queryClient } from '@/config/api/api.axios';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const LawyerEditMain = () => {
    const { mutate } = usePagesEditLawyerProfile();
    const {mutate : mutateVisible} = usePagesToggleLawyerVisible()
    const { data } = usePagesGetLawyerProfile();
    const { data: visible } = usePagesGetLawyerVisible();
    const [profile, setProfile] = useState('');

    useEffect(() => {
        if (data) {
            setProfile(data.profile);
        }
    }, [data]);

    const handleProfileEdit = () => {
        mutate({ data: { profile } });
    };

    const handleLawyerVisible = () => {
        mutateVisible({data: {number: 1}}, 
            {
                onSuccess: () => queryClient.invalidateQueries({ queryKey: getPagesGetLawyerVisibleQueryKey() })
            }
        )
    }

    if (data === undefined || visible === undefined) return null;
    return (
        <Col gap={4} width={'100%'}>
            <Typography fontSize={21} fontWeight={700}>
                Редактирование описания юриста
            </Typography>

            <Row sx={{ justifyContent: 'space-between' }}>
                <Typography>Видимость юриста: {visible.visible}</Typography>
                <Button variant='contained' color='primary' onClick={() => handleLawyerVisible()}>Изменить</Button>
            </Row>

            <ReactQuill
                formats={formats123}
                modules={{
                    toolbar: toolbar123,
                }}
                theme="snow"
                value={profile}
                onChange={setProfile}
            />

            <Row justifyContent={'flex-end'}>
                <Button onClick={() => handleProfileEdit()} variant="contained" color="primary">
                    ОБНОВИТЬ
                </Button>
            </Row>
        </Col>
    );
};
