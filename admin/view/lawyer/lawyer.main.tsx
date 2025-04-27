'use client';
import { usePagesEditLawyerProfile, usePagesGetLawyerProfile } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const LawyerEditMain = () => {
    const { mutate } = usePagesEditLawyerProfile();
    const { data } = usePagesGetLawyerProfile();
    const [profile, setProfile] = useState('');

    useEffect(() => {
        if (data) {
            setProfile(data.profile);
        }
    }, [data]);

    const handleProfileEdit = () => {
        mutate({ data: { profile } });
    };

    if (data === undefined) return null;
    return (
        <Col gap={4} width={'100%'}>
            <Typography fontSize={21} fontWeight={700}>
                Редактирование описания юриста
            </Typography>

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
