'use client';
import LikeIcon from '@/public/icons/profile_like_icon.svg';
import ProfileLink from '@/public/icons/profile_link.svg';
import WatchIcon from '@/public/icons/profile_watch_icon.svg';
import { usePostGetOne } from '@/shared/config/api/post/post';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const PostOnePage = ({ url }: { url: string }) => {
    const router = useRouter();
    const { data: post } = usePostGetOne(url);

    if (post === undefined) return null;
    return (
        <Col gap={2} width={'100%'}>
            <Row justifyContent={'flex-start'} gap={1} sx={{ cursor: 'pointer' }} onClick={() => router.push('/posts')}>
                <Image width={15} height={15} src={'/icons/arrow_back_icon.png'} alt="" />

                <Typography>Назад</Typography>
            </Row>

            <Typography fontSize={31} fontWeight={700}>
                {post.title}
            </Typography>

            <Row justifyContent={'flex-start'} gap={2}>
                <Image width={50} height={50} src={'/icons/admin_post_icon.png'} alt="" />

                <Col>
                    <Typography fontSize={18} fontWeight={500}>
                        Статьи редакции
                    </Typography>

                    <Typography color="grey">Время на прочтение: {post.readTime} мин.</Typography>
                </Col>
            </Row>

            <Box
                maxWidth={'100%'}
                sx={{
                    img: { width: '100%' },
                    iframe: { width: '100%', minHeight: '500px' },
                    //color: 'dark.main',
                }}
            >
                <div className="ql-editor" style={{ width: '100%', boxSizing: 'border-box', padding: 0 }}>
                    <div
                        style={{ width: '100%', boxSizing: 'border-box' }}
                        dangerouslySetInnerHTML={{ __html: post.post }}
                    />
                </div>
            </Box>

            <Row justifyContent={'flex-end'}>
                <Typography color="grey" fontSize={21} fontWeight={700}>
                    Дата публикации: {dayjs(post.date).format('DD.MM.YYYY')}
                </Typography>
            </Row>

            <PostLikes like={post.likes} watch={post.views} />
        </Col>
    );
};

const PostLikes = ({ like, watch }: { like: number; watch: number }) => {
    return (
        <Row justifyContent={'space-between'}>
            <Row gap={2}>
                <Row
                    gap={4}
                    bgcolor={'#ECF2FF'}
                    border={'2px solid #69B2E4'}
                    borderRadius={'9px'}
                    sx={{ cursor: 'pointer' }}
                    px={1.5}
                    minHeight={'55px'}
                >
                    <LikeIcon />

                    <Typography color={'#69B2E4'} fontSize={24} fontWeight={500}>
                        {like}
                    </Typography>
                </Row>

                <PostLink />
            </Row>

            <Row
                gap={4}
                bgcolor={'#ECF2FF'}
                border={'2px solid #69B2E4'}
                borderRadius={'9px'}
                px={1.5}
                minHeight={'55px'}
            >
                <WatchIcon />

                <Typography color={'#69B2E4'} fontSize={24} fontWeight={500}>
                    {watch}
                </Typography>
            </Row>
        </Row>
    );
};

const PostLink = () => {
    return (
        <Box
            sx={{ cursor: 'pointer' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'55px'}
            minWidth={'55px'}
            bgcolor={'#ECF2FF'}
            border={'2px solid #69B2E4'}
            borderRadius={'9px'}
        >
            <ProfileLink />
        </Box>
    );
};
