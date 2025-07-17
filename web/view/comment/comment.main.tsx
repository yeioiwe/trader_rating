'use client';
import CreateCommentIcon from '@/public/icons/create_comment_icon.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, InputAdornment, OutlinedInput, Rating, Typography, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import theme from '@/shared/config/theme/theme';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePagesCreateComment } from '@/shared/config/api/pages/pages';
import { useForm } from 'react-hook-form';
import { CommentStarRate, CommentType } from '@/shared/config/api/api.schemas';
import CommentSuccessIcon from '@/public/icons/comment_success.svg';

export const CommentMain = ({ type, id }: { type: CommentType; id: string }) => {
    const [stage, setStage] = useState<'request' | 'success'>('request');

    return stage === 'request' ? <CommentRequest id={id} type={type} setStage={setStage} /> : <CommentSuccess />;
};

const CommentRequest = ({
    type,
    id,
    setStage,
}: {
    type: CommentType;
    id: string;
    setStage: Dispatch<SetStateAction<'request' | 'success'>>;
}) => {
    const { mutate } = usePagesCreateComment();
    const { getValues, register } = useForm();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const [starValue, setStarValue] = useState<number | null>(2);
    const [commentStarValue, setCommentStarValue] = useState<CommentStarRate>(CommentStarRate.NUMBER_2);

    const [errorMessage, setErrorMessage] = useState(false);
    const [errorName, setErrorName] = useState(false);

    const createComment = () => {
        const name = getValues('name');
        const message = getValues('message');
        console.log(name.length);
        if (name.length < 3 || name.length > 30) {
            setErrorName(true);
            return;
        }
        if (message.length < 10 || message.length > 400) {
            setErrorMessage(true);
            return;
        }

        mutate(
            {
                data: {
                    commentType: type,
                    projectId: id,
                    name: getValues('name'),
                    message: getValues('message'),
                    rate: commentStarValue,
                },
            },
            {
                onSuccess: () => setStage('success'),
            },
        );
    };

    useEffect(() => {
        switch (starValue) {
            case 1:
                setCommentStarValue(CommentStarRate.NUMBER_1);
                break;
            case 2:
                setCommentStarValue(CommentStarRate.NUMBER_2);
                break;
            case 3:
                setCommentStarValue(CommentStarRate.NUMBER_3);
                break;
            case 4:
                setCommentStarValue(CommentStarRate.NUMBER_4);
                break;
            case 5:
                setCommentStarValue(CommentStarRate.NUMBER_5);
                break;
            default:
                setCommentStarValue(CommentStarRate.NUMBER_2);
                break;
        }
    }, [starValue]);

    return (
        <Col gap={2}>
            <Row justifyContent={'flex-start'} gap={2}>
                <CreateCommentIcon />

                <Typography fontSize={isSm ? 18 : 24} fontWeight={700}>
                    Оставить отзыв о проекте:
                </Typography>
            </Row>

            <Col gap={2}>
                <Col>
                    <OutlinedInput
                        {...register('name')}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#69B2E4',
                                borderWidth: '3px',
                            },
                        }}
                        placeholder="Ваше имя"
                        startAdornment={
                            <InputAdornment position="start">
                                <PersonIcon sx={{ color: '#69B2E4' }} />
                            </InputAdornment>
                        }
                    ></OutlinedInput>
                    {errorName ? (
                        <Typography color="error">Длинна имени не может быть меньше 3х и больше 30 символов</Typography>
                    ) : null}
                </Col>

                <Col>
                    <OutlinedInput
                        {...register('message')}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#69B2E4',
                                borderWidth: '3px',
                            },
                        }}
                        placeholder="Введите ваше сообщение..."
                        fullWidth
                        multiline
                        minRows={4}
                    />
                    {errorMessage ? (
                        <Typography color="error">
                            Длинна сообщения не может быть меньше 10 и больше 400 символов
                        </Typography>
                    ) : null}
                </Col>

                <Row justifyContent={'space-between'}>
                    <Col alignItems={'flex-start'}>
                        <Typography fontWeight={500}>Ваша оценка:</Typography>

                        <Rating
                            onChange={(event, newValue) => {
                                setStarValue(newValue);
                            }}
                            defaultValue={2}
                            size="large"
                        />
                    </Col>

                    <Button
                        onClick={() => createComment()}
                        sx={{ backgroundColor: '#69B2E4', minWidth: '200px', minHeight: '45px' }}
                        variant="contained"
                    >
                        <Typography color="white" fontWeight={700}>
                            Отправить
                        </Typography>
                    </Button>
                </Row>
            </Col>
        </Col>
    );
};

const CommentSuccess = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            gap={2}
            bgcolor={'#ECF2FF'}
            width={'100%'}
            height={'300px'}
            borderRadius={'9px'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
        >
            <CommentSuccessIcon />
            <Typography fontSize={isSm ? 16 : 21}>Комментарий успешно отправлен!</Typography>
            <Typography fontSize={isSm ? 14 : 18}>После проверки модерацией, он будет доступен на сайте.</Typography>
        </Col>
    );
};
