'use client';
import { ScammerProfileItemCategory, ScummerStarRate, VerifiedProfileItemCategory, VerifiedStarRate } from '@/config/api/api.schemas';
import { useVerifiedCreate } from '@/config/api/verified/verified';
import { Col, Row } from '@/shared/ui/boxes';
import { UploadAvatar } from '@/shared/ui/upload.avatar';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, MenuItem, OutlinedInput, Select, Tooltip, Typography } from '@mui/material';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface TextFields {
    url: string;
    name: string;
    tgUsername: string;
    rate: number;
    subcribers: number;
    profit: number;
    reviews: number;
    shortDescription: string;
}

export const VerifiedAdd = () => {
    const router = useRouter();
    const { register, getValues } = useForm();
    const [starRate, setStarRate] = useState<VerifiedStarRate>(VerifiedStarRate.NUMBER_2);
    const [category, setCategory] = useState<VerifiedProfileItemCategory>(VerifiedProfileItemCategory.TRADER);
    const [reviewDate, setReviewDate] = useState<Date>(dayjs('2022-04-17').toDate());
    const [img, setImg] = useState<any>();

    const { mutate } = useVerifiedCreate();

    const handleChange = (event: any) => {
        setStarRate(event.target.value);
    };

    const handleChangeCategory = (event: any) => {
        setCategory(event.target.value);
    };

    const handleCreate = () => {
        if (reviewDate === null) return;

        const form = getValues();
        mutate(
            {
                data: {
                    ...(form as TextFields),
                    avatar_url: img,
                    starRate: starRate,
                    reviewDate: reviewDate,
                    category: category,
                },
            },
            {
                onSuccess: data => {
                    router.push(`/verified/edit/${data}`);
                },
                onError: error => {
                    console.log(error);
                },
            },
        );
    };

    return (
        <Col gap={4} width={'100%'}>
            <Row gap={2} justifyContent={'flex-start'}>
                <PersonAddIcon />

                <Typography fontSize={21} fontWeight={700}>
                    Добавление проверенного проекта
                </Typography>
            </Row>

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

                    <Row justifyContent={'space-between'}>
                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Название проекта :</Typography>

                                <Tooltip title="Имя проекта которое будет указываться в заголовке и описании проекта. Можно использовать кэмел кейл. Например ScammerProject">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('name')} />
                        </Col>

                        <Col gap={2}>
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

                    <Row justifyContent={'space-between'}>
                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Картинка профиля (аватарка) :</Typography>

                                <Tooltip title="Нажмите и выбирите файл для загрузки аватарки / фото профиля проекта">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <UploadAvatar img={img} setImg={setImg} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>Категория проекта :</Typography>

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
                            </Select>
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>К-во подписчиков :</Typography>

                                <Tooltip title="Цифра, к-во подписчиков телеграмм канала, которая будет отображаться в блоке статистики профиля">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('subcribers')} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>% прибыли цифрами 0-100 :</Typography>

                                <Tooltip title="Цифра, % прибыли которая будет отображаться в миниатюрном превью проекта и профиле.">
                                    <InfoIcon />
                                </Tooltip>
                            </Row>

                            <OutlinedInput {...register('profit')} />
                        </Col>

                        <Col gap={2}>
                            <Row gap={4} justifyContent={'flex-start'}>
                                <Typography>К-во отзывов :</Typography>

                                <Tooltip title="Цифра, количество отзывов которая будет отображаться в миниатюрном превью проекта и профиле.">
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
                        <Button onClick={() => handleCreate()} variant="contained" color="primary">
                            Добавить проект
                        </Button>
                    </Row>
                </Col>
            </form>
        </Col>
    );
};
