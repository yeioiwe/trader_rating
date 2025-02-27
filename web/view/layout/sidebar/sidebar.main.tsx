import { Col } from '@/shared/ui/boxes';
import { CheckCard } from './cards/check.card';
import { NewsCard } from './cards/news.card';
import { PostsCard } from './cards/posts.card';
import { ScammersCard } from './cards/scammers.card';
import { SearchCard } from './cards/search.card';
import { VerifiedsCard } from './cards/verified.card';
import { YoutubeCard } from './cards/youtube.card';

export const SideBarMain = () => {
    return (
        <Col gap={5.5} mb={10} mt={4}>
            <SearchCard />
            <CheckCard />
            <YoutubeCard />
            <ScammersCard />
            <VerifiedsCard />
            <PostsCard />
            <NewsCard />
        </Col>
    );
};
