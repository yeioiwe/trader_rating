import theme from '@/shared/config/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { useMediaQuery } from '@mui/material';
import { CheckCard } from './cards/check.card';
import { LawyerCard } from './cards/lawyer.card';
import { NewsCard } from './cards/news.card';
import { PostsCard } from './cards/posts.card';
import { ScammersCard } from './cards/scammers.card';
import { SearchCard } from './cards/search.card';
import { YoutubeCard } from './cards/youtube.card';
import { VerifiedsCard } from './cards/verified.card';

export const SideBarMain = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col width={378} gap={5.5} mb={10} mt={4} sx={{ display: isSm ? 'none' : 'flex' }}>
            <SearchCard />
            <CheckCard />
            <YoutubeCard />
            <LawyerCard />
            <ScammersCard />
            <VerifiedsCard />
            <PostsCard />
            <NewsCard />
        </Col>
    );
};
