import { Col, Row } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NewsItem } from './news.item';

export const NewsList = () => {
    const { t } = useTranslation();

    return (
        <Col p={2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            <Row
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                sx={{
                    '@media (max-width: 1400px)': {
                        '& .item:nth-of-type(4)': {
                            display: 'none',
                        },
                    },
                }}
            >
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </Row>

            <Row justifyContent={'flex-start'}>
                <FullListButton text={t('main.button_full_list')} />
            </Row>
        </Col>
    );
};

const FullListButton = ({ text }: { text: string }) => {
    return (
        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: 250, minHeight: 50 }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};
