import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';

export const ScammersMain = () => {
    return (
        <Col width={'100%'}>
            <Row justifyContent={'space-between'}>
                <Typography fontSize={21} fontWeight={700}>
                    Список проектов мошенников
                </Typography>

                <Button variant="contained" color="primary">
                    Добавить мошенника
                </Button>
            </Row>
        </Col>
    );
};
