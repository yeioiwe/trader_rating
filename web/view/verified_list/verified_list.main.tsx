'use client'
import { Col } from '@/shared/ui/boxes';
import { Banner } from '../main/banner/banner';
import { VerfiedProjectsList } from './projects/verified.projects.list';
import { VerifiedListBenefits } from './verified_list.benefits';
import { VerifiedListPosts } from './verified_list.posts';
import { VerifiedListTitle } from './verified_list.title';

export const VerifiedListMain = () => {
    return (
        <Col gap={4} width={'100%'} flexGrow={1}>
            <Banner />
            <VerifiedListTitle />
            <VerfiedProjectsList />
            <VerifiedListPosts />
            <VerifiedListBenefits />
        </Col>
    );
};
