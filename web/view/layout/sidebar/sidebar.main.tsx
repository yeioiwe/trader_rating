import { Col } from '@/shared/ui/boxes';
import { CheckCard } from './cards/check.card';
import { SearchCard } from './cards/search.card';
import { YoutubeCard } from './cards/youtube.card';

export const SideBarMain = () => {
    return (
        <Col gap={5.5}>
            <SearchCard />
            <CheckCard />
            <YoutubeCard />
        </Col>
    );
};
