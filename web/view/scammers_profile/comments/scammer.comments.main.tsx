import CommentsIcon from '@/public/icons/profile_comments_icon.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { ScammerCommentItem } from './scammer.comment.item';

export const ScammerProfileComments = () => {
    return (
        <Col gap={2}>
            <Row justifyContent={'flex-start'} gap={1.5}>
                <CommentsIcon />

                <Typography fontSize={24} fontWeight={700}>
                    Последние отзывы о проекте:
                </Typography>
            </Row>

            <Col bgcolor={'#ECF2FF'} borderRadius={'9px'} py={2.25} px={1.75} gap={2}>
                <ScammerCommentItem />
                <ScammerCommentItem />
                <ScammerCommentItem />
                <ScammerCommentItem />

                <Row justifyContent={'center'} width={'100%'}>
                    <Button
                        sx={{
                            width: '320px',
                            bgcolor: 'white',
                            border: '2px solid #69B2E4',
                            borderRadius: '7px',
                        }}
                    >
                        <Typography color="#69B2E4" fontSize={20} fontWeight={700}>
                            Показать больше
                        </Typography>
                    </Button>
                </Row>
            </Col>
        </Col>
    );
};
