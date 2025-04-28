'use client';
import StarIcon from '@/public/icons/scammer_star_icon.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';

export const ScammerStatsStar = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#FFECEC'}
            border={'4px solid #C53D3D'}
            width={'100%'}
            borderRadius={'14px'}
            position={'relative'}
            minHeight={'100px'}
            px={1.5}
            pt={0.5}
        >
            <Typography fontSize={20} color={'#C53D3D'}>
                Рейтинг:
            </Typography>

            <Row justifyContent={'space-between'}>
                <StarIcon />

                <Typography fontSize={isSm ? 30 : 48} fontWeight={700} color={'#C53D3D'}>
                    1.7
                </Typography>
            </Row>
        </Col>
    );
};
