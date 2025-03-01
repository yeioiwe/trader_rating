import NewsTitleIcon from '@/public/icons/layout_news.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const NewsTitle = () => {
    //const { t } = useTranslation();

    return (
        <Col>
            <Row gap={2} justifyContent={'flex-start'}>
                <NewsTitleIcon />

                <Typography fontSize={24} fontWeight={700}>
                    Новости криптовалют
                </Typography>
            </Row>

            <Typography fontSize={16} fontWeight={300} color={'#918C8C'}>
                Актуальные новости в мире криптовалюты
            </Typography>
        </Col>
    );
};
