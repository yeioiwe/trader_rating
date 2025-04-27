'use client';
import { usePagesGetLawyerProfile } from '@/shared/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LawyerCard } from '../main/lawyer/lawyer.card';
import { ReviewForm } from './review.form';

export const ReviewMain = () => {
    const { data: lawyerProfile } = usePagesGetLawyerProfile();
    const [request, setRequest] = useState(false);

    if (lawyerProfile === undefined) return null;

    return (
        <Col gap={4}>
            <Col gap={2}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <Image src={'/icons/review_title_icon.png'} width={30} height={30} alt="title" />

                    <Typography fontSize={30} fontWeight={700}>
                        Запрос на проверку проекта
                    </Typography>
                </Row>

                <Typography fontSize={21}>
                    Есть проект, который вызывает сомнения? Или, наоборот, кажется перспективным, но информации о нём
                    почти нет? Отправьте нам запрос — мы детально изучим проект, проверим его на честность, прозрачность
                    и безопасность. Если найдём что-то подозрительное — предупредим, а если проект достоин внимания —
                    включим его в наш рейтинг.
                </Typography>
            </Col>

            <MoreInfoBanner />

            <Typography fontSize={21}>
                Чтобы мы могли проверить проект, пожалуйста, заполните короткую форму ниже. Нам нужно понимать, о каком
                проекте идёт речь, где его найти и что именно вызывает у вас интерес или подозрения. Также укажите свои
                контактные данные — мы свяжемся с вами, если потребуется уточнить детали.
            </Typography>

            {request ? <RequestSend /> : <ReviewForm setRequest={setRequest} />}

            <LawyerCard />

            <Box
                maxWidth={'100%'}
                sx={{
                    img: { width: '100%' },
                    iframe: { width: '100%', minHeight: '500px' },
                }}
            >
                <div className="ql-editor" style={{ width: '100%', boxSizing: 'border-box', padding: 0 }}>
                    <div
                        style={{ width: '100%', boxSizing: 'border-box' }}
                        dangerouslySetInnerHTML={{ __html: lawyerProfile.profile }}
                    />
                </div>
            </Box>
        </Col>
    );
};

const MoreInfoBanner = () => {
    const router = useRouter();

    return (
        <Row bgcolor={'#3bb974'} borderRadius={'19px'} justifyContent={'space-between'} p={3}>
            <Row gap={3}>
                <Image width={46} height={46} src={'/icons/review_how_to_icon.png'} alt="" />

                <Col>
                    <Typography fontWeight={500} fontSize={24} color="#FFFFFF">
                        Детальная информация о проерке
                    </Typography>

                    <Typography fontWeight={300} fontSize={16} color="#FFFFFF">
                        Узнайте как происходит процесс проверки проектов!
                    </Typography>
                </Col>
            </Row>

            <Button
                onClick={() => router.push('/posts/kak_proiskhodit_protsess_proverki_proektov')}
                sx={{ borderRadius: '9px', bgcolor: 'white', px: 3, py: 1.5, color: '#3bb974' }}
            >
                Подробнее
            </Button>
        </Row>
    );
};

const RequestSend = () => {
    return (
        <Col
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            minHeight={'535px'}
            p={4}
            borderRadius={'9px'}
            bgcolor={'#ECF2FF'}
            gap={2}
            textAlign={'center'}
        >
            <Image width={150} height={150} src={'/icons/request_done_icon.png'} alt="" />

            <Typography fontSize={21} fontWeight={700}>
                Спасибо за ваш вклад!
            </Typography>

            <Typography>
                Мы получили ваш запрос и начнём проверку как можно скорее. Ваше участие помогает другим пользователям
                избегать рисков и делать осознанный выбор. Вместе мы строим прозрачное и безопасное криптосообщество.
            </Typography>
        </Col>
    );
};
