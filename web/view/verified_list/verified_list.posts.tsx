import PostsIcon from '@/public/icons/verified_posts_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography, useMediaQuery } from '@mui/material';

export const VerifiedListPosts = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Row bgcolor={'#449FE8'} borderRadius={'19px'} justifyContent={'space-between'} p={3}>
            <Row gap={3}>
                <PostsIcon />

                <Col>
                    <Typography fontWeight={500} fontSize={isSm ? 15 : 24} color="#FFFFFF">
                        Отзывы
                    </Typography>

                    <Typography fontWeight={300} fontSize={isSm ? 12 : 16} color="#FFFFFF">
                        Узнайте как происходит процесс проверки проектов!
                    </Typography>
                </Col>
            </Row>

            <Button sx={{ borderRadius: '9px', bgcolor: 'white', px: 3, py: 1.5 }}>Подробнее</Button>
        </Row>
    );
};
