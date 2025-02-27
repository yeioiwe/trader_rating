import { Col } from '@/shared/ui/boxes';
import { MainPageTitle } from './main.title';
import { ScammersMain } from './scammers/scammers.main';

export const MainPage = () => {
    return (
        <Col gap={4}>
            <MainPageTitle />
            <ScammersMain />
        </Col>
    );
};
