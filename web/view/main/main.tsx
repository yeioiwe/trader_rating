import { Col } from '@/shared/ui/boxes';
import { MainPageTitle } from './main.title';
import { ScammersMain } from './scammers/scammers.main';
import { VerifiedMain } from './verified/verified.main';

export const MainPage = () => {
    return (
        <Col gap={4}>
            <MainPageTitle />
            <ScammersMain />
            <VerifiedMain />
        </Col>
    );
};
