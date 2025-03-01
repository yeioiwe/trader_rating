import { Col } from '@/shared/ui/boxes';
import { TrustList } from './trust.list';
import { TrustTitle } from './trust.title';

export const TrustMain = () => {
    return (
        <Col gap={2}>
            <TrustTitle />

            <TrustList />
        </Col>
    );
};
