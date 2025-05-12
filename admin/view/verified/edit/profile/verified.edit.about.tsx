'use client';
import { ScammerProfileAboutVisible, VerifiedProfileAboutVisible } from '@/config/api/api.schemas';

import { Col, Row } from '@/shared/ui/boxes';
import InfoIcon from '@mui/icons-material/Info';
import { Button, MenuItem, OutlinedInput, Select, Tooltip, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';
import { useVerifiedEditAbout, useVerifiedGetAbout } from '@/config/api/verified/verified';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const VerifiedEditAbout = ({ id }: { id: number }) => {
    const { data: projectAbout } = useVerifiedGetAbout(id);
    const { register, getValues, setValue } = useForm();
    const { mutate } = useVerifiedEditAbout();

    const [about, setAbout] = useState('');
    const [visible, setVisible] = useState<VerifiedProfileAboutVisible>(VerifiedProfileAboutVisible.VISIBLE);

    const handleEditAbout = () => {
        if (about && visible !== undefined)
            mutate(
                {
                    id,
                    data: {
                        about: about,
                        profileLikes: getValues('profileLikes'),
                        profileViews: getValues('profileViews'),
                        visible: visible,
                        params: `{"one": "${getValues('params1')}", "two": "${getValues('params2')}", "three": "${getValues('params3')}"}`,
                    },
                },
                {
                    onSuccess: () => console.log('updated'),
                    onError: error => console.log(error),
                },
            );
    };

    const handleVisibleChange = (event: any) => {
        setVisible(event.target?.value);
    };

    useEffect(() => {
        if (projectAbout !== undefined) {
            setValue('profileLikes', projectAbout.profileLikes);
            setValue('profileViews', projectAbout.profileViews);
            setVisible(projectAbout.visible);
            setAbout(projectAbout.about);
        }
    }, [projectAbout]);

    return (
        <Col>
            <form>
                <Row justifyContent={'space-between'} mb={4}>
                    <Col>
                        <Typography>Первый параметр:</Typography>

                        <OutlinedInput {...register('params1')} />
                    </Col>

                    <Col>
                        <Typography>Второй параметр:</Typography>

                        <OutlinedInput {...register('params2')} />
                    </Col>

                    <Col>
                        <Typography>Третий параметр:</Typography>

                        <OutlinedInput {...register('params3')} />
                    </Col>

                </Row>


                <Col gap={4}>
                    <ReactQuill
                        formats={formats123}
                        modules={{
                            toolbar: toolbar123,
                        }}
                        theme="snow"
                        value={about}
                        onChange={setAbout}
                    />

                    <Row justifyContent={'space-between'}>
                        <Row gap={4}>
                            <Col gap={2}>
                                <Row gap={4} justifyContent={'flex-start'}>
                                    <Typography>К-во лайков :</Typography>

                                    <Tooltip title="Лайки, отображаются в профиле проекта, под описанием">
                                        <InfoIcon />
                                    </Tooltip>
                                </Row>

                                <OutlinedInput {...register('profileLikes')} />
                            </Col>

                            <Col gap={2}>
                                <Row gap={4} justifyContent={'flex-start'}>
                                    <Typography>К-во просмотров :</Typography>

                                    <Tooltip title="Просмотры, отображаются в профиле проекта, под описанием">
                                        <InfoIcon />
                                    </Tooltip>
                                </Row>

                                <OutlinedInput {...register('profileViews')} />
                            </Col>
                        </Row>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Статус проекта :</Typography>

                                <Tooltip title="Отображается текущий статус. VIDIBLE - отображается в списке и виден клиентам сайта. HIDDEN - устанавливается чтобы временно скрыть отображение на сайте, не удаляя проект.">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <Select value={visible} onChange={handleVisibleChange}>
                                <MenuItem value={ScammerProfileAboutVisible.VISIBLE}>VISIBLE</MenuItem>
                                <MenuItem value={ScammerProfileAboutVisible.HIDDEN}>HIDDEN</MenuItem>
                            </Select>
                        </Col>
                    </Row>

                    <Row justifyContent={'flex-end'}>
                        <Button onClick={() => handleEditAbout()} variant="contained" color="primary">
                            ОБНОВИТЬ
                        </Button>
                    </Row>
                </Col>
            </form>
        </Col>
    );
};
