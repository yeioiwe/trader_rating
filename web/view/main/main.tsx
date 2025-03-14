import { Col } from '@/shared/ui/boxes';
import { Banner } from './banner/banner';
import { LawyerCard } from './lawyer/lawyer.card';
import { NewsMain } from './news/news.main';
import { PostsMain } from './posts/posts.main';
import { RequestVerificationCard } from './request_verification/request.card';
import { ScammersMain } from './scammers/scammers.main';
import { TrustMain } from './trust/trust.main';
import { VerifiedMain } from './verified/verified.main';

export const Main = () => {
    return (
        <Col gap={4} width={'100%'} flexGrow={1}>
            <Banner />
            {/* <MainPageTitle /> */}
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
