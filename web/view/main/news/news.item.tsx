import PostWatchIcon from '@/public/icons/post_watch.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image from 'next/image';

export const NewsItem = () => {
    return (
        <Col className="item" gap={1.5} maxWidth={223} flexShrink={0} sx={{ cursor: 'pointer' }}>
            <Image
                src={'/news.jpg'}
                width={223}
                height={115}
                alt="news"
                style={{ borderRadius: '9px', objectFit: 'cover' }}
            />

            <Col>
                <Typography fontSize={16} fontWeight={500}>
                    Маск создал X-Coin – взлетел на 5000%, потом оказался мемом!
                </Typography>

                <Row justifyContent={'space-between'}>
                    <Row gap={1}>
                        <PostWatchIcon />

                        <Typography fontWeight={300} fontSize={14} color={'#97A6A7'}>
                            9023
                        </Typography>
                    </Row>

                    <Typography fontWeight={300} fontSize={14} color={'#97A6A7'}>
                        15.10.2024
                    </Typography>
                </Row>
            </Col>
        </Col>
    );
};
