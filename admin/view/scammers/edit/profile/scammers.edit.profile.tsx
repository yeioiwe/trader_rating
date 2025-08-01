'use client';
import { ScammerProfileItemCategory, ScummerStarRate } from '@/config/api/api.schemas';
import { useScammersEditProfile, useScammersGetOne } from '@/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { UploadAvatar } from '@/shared/ui/upload.avatar';
import InfoIcon from '@mui/icons-material/Info';

import { Button, MenuItem, OutlinedInput, Select, Tooltip, Typography } from '@mui/material';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextFields } from '../../add/scammers.add';
import { ScammersEditAbout } from './scammer.edit.about';

export const ScammersEdit = ({ id }: { id: number }) => {
    const { data: projectProfile } = useScammersGetOne(id);
    const { register, getValues, setValue } = useForm();
    const [starRate, setStarRate] = useState<ScummerStarRate>(ScummerStarRate.NUMBER_2);
    const [category, setCategory] = useState<ScammerProfileItemCategory>(ScammerProfileItemCategory.TRADER);
    const [reviewDate, setReviewDate] = useState<Date>(dayjs('2022-04-17').toDate());
    const [img, setImg] = useState<any>();

    const { mutate } = useScammersEditProfile();

    const handleChange = (event: any) => {
        setStarRate(event.target.value);
    };

    const handleChangeCategory = (event: any) => {
        setCategory(event.target.value);
    };

    const handleEdit = () => {
        const form = getValues();
        mutate({
            id,
            data: {
                ...(form as TextFields),
                category: category,
                reviewDate: reviewDate,
                starRate: starRate,
                avatar_url: img,
            },
        });
    };

    useEffect(() => {
        if (projectProfile !== undefined) {
            setValue('url', projectProfile.url);
            setValue('name', projectProfile.name);
            setValue('tgUsername', projectProfile.tgUsername);
            setValue('rate', projectProfile.rate);
            setValue('subcribers', projectProfile.subcribers);
            setValue('reports', projectProfile.reports);
            setValue('reviews', projectProfile.reviews);
            setValue('shortDescription', projectProfile.shortDescription);
            setValue('reviews', projectProfile.reviews);
            setStarRate(projectProfile.starRate);
            setImg(projectProfile.avatar_url);
            setReviewDate(projectProfile.reviewDate);
            setCategory(projectProfile.category);
        }
    }, [projectProfile]);

    return (
        <Col gap={4} width={'100%'}>
            <form>
                <Col gap={2}>
                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>URL проекта (ссылка) :</Typography>

                            <Tooltip title="То что будет указано в ссылке проекта, после домена. Например: scammer_project. Указывать без пробелов и лишних символов. Желательно анг символы нижнего регистра + нижнее подчеркивание">
                                <InfoIcon />
                            </Tooltip>
                        </Row>

                        <OutlinedInput {...register('url')} />
                    </Col>

                    <Row justifyContent={'space-between'} gap={1}>
                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Название проекта :</Typography>

                                <Tooltip title="Имя проекта которое будет указываться в заголовке и описании проекта. Можно использовать кэмел кейл. Например ScammerProject">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('name')} />
                        </Col>

                        <Col gap={2} alignSelf={'normal'} justifyContent={'space-between'}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>TG username :</Typography>

                                <Tooltip title="Username tg канала. Указывать просто строкой, без @ и t.me/... Например: telegramuser">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('tgUsername')} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Оценка, от 1 до 100 :</Typography>

                                <Tooltip title="Цифра, указанная строго от 1 до 100. Оценка проекта, будет указана в миниатюрном превью проекта и профиле ">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('rate')} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>К-во звезд, оценка :</Typography>

                                <Tooltip title="К-во звезд которое будет отображаться в миниатюрном превью проекта и профиле.">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <Select value={starRate} onChange={handleChange}>
                                <MenuItem value={ScummerStarRate.NUMBER_1}>1 звезда</MenuItem>
                                <MenuItem value={ScummerStarRate.NUMBER_2}>2 звезды</MenuItem>
                                <MenuItem value={ScummerStarRate.NUMBER_3}>3 звезды</MenuItem>
                                <MenuItem value={ScummerStarRate.NUMBER_4}>4 звезды</MenuItem>
                                <MenuItem value={ScummerStarRate.NUMBER_5}>5 звезд</MenuItem>
                            </Select>
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Дата проверки проекта :</Typography>

                                <Tooltip title="Дата, которая будет указана в профиле проекта как: Проверен - 12.01.2025">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateField']} sx={{ padding: 0 }}>
                                    <DateField
                                        value={dayjs(reviewDate)}
                                        onChange={newValue => setReviewDate(newValue?.toDate() as Date)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Col>
                    </Row>

                    <Row justifyContent={'space-between'} gap={1}>
                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Аватарка:</Typography>

                                <Tooltip title="Нажмите и выбирите файл для загрузки аватарки / фото профиля проекта">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <UploadAvatar img={img} setImg={setImg} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Категория:</Typography>

                                <Tooltip title="Категория используется для быстрой сортировки в списке проектов">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <Select value={category} onChange={handleChangeCategory}>
                                <MenuItem value={ScammerProfileItemCategory.INVESTMENTS}>Инвестиции</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.TRADER}>Трейдеры</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.CAPPER}>Категории</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.GAME}>Крипто игры</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.CASINO}>Казино</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.EXCHANGES}>Крипто биржи</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.TRADING}>Торговля</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.BROKER}>Брокер</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.TECHNOLOGIES}>IT-Технологии</MenuItem>
                                <MenuItem value={ScammerProfileItemCategory.WORK}>Работа</MenuItem>
                            </Select>
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Подписчики:</Typography>

                                <Tooltip title="Цифра, к-во подписчиков телеграмм канала, которая будет отображаться в блоке статистики профиля">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('subcribers')} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Жалобы:</Typography>

                                <Tooltip title="Цифра, количество жалоб которая будет отображаться в миниатюрном превью проекта и профиле.">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('reports')} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Отзывовы:</Typography>

                                <Tooltip title="Цифра, количество жалоб/отзывов которая будет отображаться в миниатюрном превью проекта и профиле.">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('reviews')} />
                        </Col>
                    </Row>

                    <Col gap={2}>
                        <Row gap={4} justifyContent={'flex-start'}>
                            <Typography>Краткое описание проекта:</Typography>

                            <Tooltip title="Описание/краткая информация/заключение. Которая будет отображаться в списке всех проектов в миниатюрном превью проекта и профиле.">
                                <InfoIcon />
                            </Tooltip>
                        </Row>

                        <OutlinedInput multiline minRows={4} {...register('shortDescription')} />
                    </Col>

                    <Row justifyContent={'flex-end'}>
                        <Button onClick={() => handleEdit()} variant="contained" color="primary">
                            ОБНОВИТЬ
                        </Button>
                    </Row>
                </Col>
            </form>

            <ScammersEditAbout id={id} />
        </Col>
    );
};
