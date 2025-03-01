import { Col } from '@/shared/ui/boxes';
import { NewsList } from './news.list';
import { NewsTitle } from './news.title';

export const NewsMain = () => {
    return (
        <Col gap={2}>
            <NewsTitle />

            <NewsList />
        </Col>
    );
};
