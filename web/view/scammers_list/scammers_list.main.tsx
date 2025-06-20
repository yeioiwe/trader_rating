'use client'
import { Col } from '@/shared/ui/boxes';
import { Banner } from '../main/banner/banner';
import { ScammerProjectsList } from './projects/scammers.projects.list';
import { ScammersListAbout } from './scammers_list.about';
import { ScammersListPosts } from './scammers_list.posts';
import { ScammersListTitle } from './scammers_list.title';

export const ScammersListMain = () => {
    return (
        <Col gap={4} width={'100%'} flexGrow={1}>
            <Banner />
            <ScammersListTitle />
            <ScammerProjectsList />
            <ScammersListPosts />
            <ScammersListAbout />
        </Col>
    );
};
