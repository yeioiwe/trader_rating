import CommentsIcon from '@/public/icons/profile_comments_icon.svg';
import { useScammersGetCommentList } from '@/shared/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { ScammerCommentItem } from './scammer.comment.item';

export const ScammerProfileComments = ({ id }: { id: number }) => {
    const { data } = useScammersGetCommentList(id);

    if (data === undefined) return null;
    if (data.items.length < 1) return null;
    return (
        <Col gap={2}>
            <Row justifyContent={'flex-start'} gap={1.5}>
                <CommentsIcon />

                <Typography fontSize={24} fontWeight={700}>
                    Последние отзывы о проекте:
                </Typography>
            </Row>

            <Col bgcolor={'#ECF2FF'} borderRadius={'9px'} py={2.25} px={1.75} gap={2}>
                {data.items.map((c, i) => (
                    <ScammerCommentItem comment={c} key={i} />
                ))}

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
