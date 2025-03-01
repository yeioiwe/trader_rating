import PostsTitleIcon from '@/public/icons/layout_post.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const PostsTitle = () => {
    const { t } = useTranslation();

    return (
        <Col>
            <Row gap={2} justifyContent={'flex-start'}>
                <PostsTitleIcon />

                <Typography fontSize={24} fontWeight={700}>
                    {t('main.posts.title')}
                </Typography>
            </Row>

            <Typography fontSize={16} fontWeight={300} color={'#918C8C'}>
                {t('main.posts.description')}
            </Typography>
        </Col>
    );
};
