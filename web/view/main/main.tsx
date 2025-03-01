import { Col } from '@/shared/ui/boxes';
import { LawyerCard } from './lawyer/lawyer.card';
import { MainPageTitle } from './main.title';
import { NewsMain } from './news/news.main';
import { PostsMain } from './posts/posts.main';
import { RequestVerificationCard } from './request_verification/request.card';
import { ScammersMain } from './scammers/scammers.main';
import { TrustMain } from './trust/trust.main';
import { VerifiedMain } from './verified/verified.main';

export const MainPage = () => {
    return (
        <Col gap={4}>
            <MainPageTitle />
            <ScammersMain />
            <VerifiedMain />
            <RequestVerificationCard />
            <LawyerCard />
            <PostsMain />
            <NewsMain />
            <TrustMain />
        </Col>
    );
};
