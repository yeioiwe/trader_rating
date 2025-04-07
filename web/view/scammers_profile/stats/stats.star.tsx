import StarIcon from '@/public/icons/scammer_star_icon.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const ScammerStatsStar = () => {
    return (
        <Col
            justifyContent={'flex-start'}
            bgcolor={'#FFECEC'}
            border={'4px solid #C53D3D'}
            minWidth={'218px'}
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

                <Typography fontSize={48} fontWeight={700} color={'#C53D3D'}>
                    1.7
                </Typography>
            </Row>
        </Col>
    );
};
