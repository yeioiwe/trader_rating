import PostsIcon from '@/public/icons/verified_posts_icon.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';

export const ScammersListPosts = () => {
    return (
        <Row bgcolor={'#F26E71'} borderRadius={'19px'} justifyContent={'space-between'} p={3}>
            <Row gap={3}>
                <PostsIcon />

                <Col>
                    <Typography fontWeight={500} fontSize={24} color="#FFFFFF">
                        Статьи редакции
                    </Typography>

                    <Typography fontWeight={300} fontSize={16} color="#FFFFFF">
                        Узнайте чем могут быть опасны мошенники!
                    </Typography>
                </Col>
            </Row>

            <Button sx={{ borderRadius: '9px', bgcolor: 'white', px: 3, py: 1.5 }}>
                <Typography color="#F26E71">Подробнее</Typography>
            </Button>
        </Row>
    );
};
