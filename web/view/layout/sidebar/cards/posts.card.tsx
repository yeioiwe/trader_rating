import ArrowIcon from '@/public/icons/arrow_icon.svg';
import PostIcon from '@/public/icons/layout_post.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';
import { AllListButton } from './scammers.card';

export const PostsCard = () => {
    const { t } = useTranslation();

    return (
        <SidebarCard bgcolor={'#ECF2FF'} icon={<PostIcon />}>
            <Col gap={2}>
                <Typography fontSize={20} fontWeight={700}>
                    {t('sidebar.posts.title')}
                </Typography>

                <Col gap={1}>
                    <PostItem title={'Первые шаги в трейдинге'} />
                    <PostItem title={'Как проходит процесс проверки трейдеров'} />
                    <PostItem title={'Чем может быть полезен наш юрист'} />
                </Col>

                <AllListButton />
            </Col>
        </SidebarCard>
    );
};

const PostItem = ({ title }: { title: string }) => {
    return (
        <Row
            px={2}
            py={1.5}
            borderRadius={'8px'}
            justifyContent={'space-between'}
            sx={{
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                '&:hover': {
                    bgcolor: '#f0f8ff',
                },
            }}
        >
            <Typography fontSize={14}>{title}</Typography>

            <ArrowIcon />
        </Row>
    );
};
