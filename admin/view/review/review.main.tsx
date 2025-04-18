'use client';
import { queryClient } from '@/config/api/api.axios';
import { ReviewItem as ReviewItemType } from '@/config/api/api.schemas';
import { getPagesGetReviewListQueryKey, usePagesDeleteReview, usePagesGetReviewList } from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import AddLinkIcon from '@mui/icons-material/AddLink';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PersonIcon from '@mui/icons-material/Person';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';

export const ReviewMain = () => {
    const { data: requests } = usePagesGetReviewList();

    if (requests === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <Typography fontSize={21} fontWeight={700}>
                Запросы на проверку проектов
            </Typography>

            <Col gap={2}>
                {requests.items.map((r, i) => (
                    <ReviewItem review={r} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const ReviewItem = ({ review }: { review: ReviewItemType }) => {
    const { mutate } = usePagesDeleteReview();

    const hendleDelete = () => {
        mutate(
            { id: review.id },
            { onSuccess: () => queryClient.invalidateQueries({ queryKey: getPagesGetReviewListQueryKey() }) },
        );
    };

    return (
        <Col
            gap={2}
            width={'100%'}
            bgcolor={'#ffffff'}
            py={2}
            px={4}
            borderRadius={'6px'}
            border={'2px solid rgb(212 212 212)'}
        >
            <Row justifyContent={'space-between'}>
                <Col gap={1}>
                    <Row gap={2}>
                        <DriveFileRenameOutlineIcon />

                        <Typography fontSize={21} fontWeight={700}>
                            Название проекта:
                        </Typography>
                    </Row>

                    <Typography>{review.projectName}</Typography>
                </Col>

                <IconButton onClick={() => hendleDelete()} sx={{ color: 'red' }}>
                    <DeleteIcon />
                </IconButton>
            </Row>

            <Col gap={1}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <AddLinkIcon />

                    <Typography fontSize={21} fontWeight={700}>
                        Ссылка на проект:
                    </Typography>
                </Row>

                <Typography>{review.projectUrl}</Typography>
            </Col>

            <Col gap={1}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <DescriptionIcon />

                    <Typography fontSize={21} fontWeight={700}>
                        Описание:
                    </Typography>
                </Row>

                <Typography>{review.comment}</Typography>
            </Col>

            <Col gap={1}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <PersonIcon />

                    <Typography fontSize={21} fontWeight={700}>
                        Имя отправителя:
                    </Typography>
                </Row>

                <Typography>{review.username}</Typography>
            </Col>

            <Col gap={1}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <PersonSearchIcon />

                    <Typography fontSize={21} fontWeight={700}>
                        Контакт отправителя:
                    </Typography>
                </Row>

                <Typography>{review.userContact}</Typography>
            </Col>

            <Row justifyContent={'flex-start'} gap={2}>
                <EditCalendarIcon />

                <Typography fontSize={21} fontWeight={700}>
                    Время отправки: {dayjs(review.createdAt).format('DD.MM.YYYY HH:mm:ss')}
                </Typography>
            </Row>
        </Col>
    );
};
