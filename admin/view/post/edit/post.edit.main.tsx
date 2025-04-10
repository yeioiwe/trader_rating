'use client';
import { usePostGetOne } from '@/config/api/post/post';
import { Col } from '@/shared/ui/boxes';
import { PostEditContent } from './post.edit.content';
import { PostEditPreview } from './post.edit.preview';

export const PostEditMain = ({ id }: { id: number }) => {
    const { data: post } = usePostGetOne(id);

    if (post === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <PostEditPreview id={id} />

            <PostEditContent id={id} />
        </Col>
    );
};
