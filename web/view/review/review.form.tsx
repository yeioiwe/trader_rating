import { usePagesCreateReviewRequest } from '@/shared/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

export const ReviewForm = ({ setRequest }: { setRequest: Dispatch<SetStateAction<boolean>> }) => {
    const { mutate } = usePagesCreateReviewRequest();
    const { register, getValues } = useForm();

    const hendleCreate = () => {
        mutate(
            {
                data: {
                    comment: getValues('comment'),
                    projectName: getValues('projectName'),
                    projectUrl: getValues('projectUrl'),
                    userContact: getValues('userContact'),
                    username: getValues('username'),
                },
            },
            { onSuccess: () => setRequest(true) },
        );
    };
    return (
        <Col gap={4}>
            <form>
                <Col py={4} px={2.5} borderRadius={'9px'} bgcolor={'#ECF2FF'} gap={4}>
                    <TextField fullWidth label="Название проекта" variant="outlined" {...register('projectName')} />

                    <TextField fullWidth label="Ссылка на проект" variant="outlined" {...register('projectUrl')} />

                    <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label="Описание проблемы или комментарий"
                        variant="outlined"
                        {...register('comment')}
                    />

                    <Row width={'100%'} justifyContent={'flex-start'} gap={4}>
                        <TextField fullWidth label="Ваше имя" variant="outlined" {...register('username')} />

                        <TextField fullWidth label="Ваш контакт" variant="outlined" {...register('userContact')} />
                    </Row>

                    <Row width={'100%'} justifyContent={'flex-end'}>
                        <Button
                            onClick={() => hendleCreate()}
                            variant="contained"
                            sx={{ backgroundColor: 'rgb(59 185 116)', width: '100%', minHeight: '50px' }}
                        >
                            <Typography fontWeight={700}>ОТПРАВИТЬ</Typography>
                        </Button>
                    </Row>
                </Col>
            </form>
        </Col>
    );
};
