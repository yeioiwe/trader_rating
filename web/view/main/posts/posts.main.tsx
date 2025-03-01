import { Col } from '@/shared/ui/boxes';
import { PostsList } from './posts.list';
import { PostsTitle } from './posts.title';

export const PostsMain = () => {
    return (
        <Col gap={2}>
            <PostsTitle />

            <PostsList />
        </Col>
    );
};
