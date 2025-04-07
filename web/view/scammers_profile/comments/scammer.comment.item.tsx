import CommentAvatarIcon from '@/public/icons/comment_avatar_icon.svg';
import CommnetStarIcon from '@/public/icons/comment_star_icon.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

export const ScammerCommentItem = () => {
    return (
        <Col px={3.5} py={2} gap={2} border={'3px solid #69B2E4'} borderRadius={'9px'} bgcolor={'white'}>
            <CommentUser />

            <Typography fontSize={14}>
                Привет всем! Хочу выразить благодарность данному проекту и команде, которая проверила его. Благодаря
                сотрудничеству смог приобрести и для себя недвижимость по аукционной цене! Спасибо вам еще раз! Твердые
                5 звезд от меня!
            </Typography>

            <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} color="#747474" fontWeight={700}>
                    07.03.2025
                </Typography>
            </Row>
        </Col>
    );
};

const CommentUser = () => {
    return (
        <Row justifyContent={'flex-start'} gap={1.75}>
            <CommentAvatar />

            <Col>
                <Typography fontSize={20} fontWeight={500}>
                    Олег Р.
                </Typography>

                <Row gap={0.5} justifyContent={'flex-start'}>
                    <CommnetStarIcon />
                    <CommnetStarIcon />
                    <CommnetStarIcon />
                    <CommnetStarIcon />
                    <CommnetStarIcon />
                </Row>
            </Col>
        </Row>
    );
};

const CommentAvatar = () => {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'#ECF2FF'}
            borderRadius={'50%'}
            border={'3px solid #69B2E4'}
            width={'65px'}
            height={'65px'}
        >
            <CommentAvatarIcon />
        </Box>
    );
};
