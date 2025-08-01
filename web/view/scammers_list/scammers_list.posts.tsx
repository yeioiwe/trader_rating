import PostsIcon from '@/public/icons/verified_posts_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography, useMediaQuery } from '@mui/material';

export const ScammersListPosts = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Row bgcolor={'#F26E71'} borderRadius={'19px'} justifyContent={'space-between'} p={3}>
            <Row gap={3}>
                <PostsIcon />

                <Col>
                    <Typography fontWeight={500} fontSize={isSm ? 18 : 24} color="#FFFFFF">
                        Отзывы
                    </Typography>

                    <Typography fontWeight={300} fontSize={isSm ? 12 : 16} color="#FFFFFF">
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
