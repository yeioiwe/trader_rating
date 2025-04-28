import CommentAvatarIcon from '@/public/icons/comment_avatar_icon.svg';
import { PostCommentItem as PostCommentItemType } from '@/shared/config/api/api.schemas';
import { Col, Row } from '@/shared/ui/boxes';
import { BlueStarsGroup } from '@/shared/ui/stars.group';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

export const PostCommentItem = ({ comment }: { comment: PostCommentItemType }) => {
    return (
        <Col px={3.5} py={2} gap={2} border={'3px solid #69B2E4'} borderRadius={'9px'} bgcolor={'white'}>
            <CommentUser comment={comment} />

            <Typography fontSize={14}>{comment.comment}</Typography>

            <Row justifyContent={'flex-start'}>
                <Typography fontSize={14} color="#747474" fontWeight={700}>
                    {dayjs(comment.date).format('DD.MM.YYYY')}
                </Typography>
            </Row>
        </Col>
    );
};

const CommentUser = ({ comment }: { comment: PostCommentItemType }) => {
    return (
        <Row justifyContent={'flex-start'} gap={1.75}>
            <CommentAvatar />

            <Col>
                <Typography fontSize={20} fontWeight={500}>
                    {comment.name}
                </Typography>

                <Row gap={0.5} justifyContent={'flex-start'}>
                    <BlueStarsGroup rating={comment.starRate} />
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
