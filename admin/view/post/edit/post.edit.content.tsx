'use client';
import { usePostEditContent, usePostGetOne } from '@/config/api/post/post';
import { Col, Row } from '@/shared/ui/boxes';
import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const PostEditContent = ({ id }: { id: number }) => {
    const { data: post } = usePostGetOne(id);
    const { mutate } = usePostEditContent();

    const [content, setContent] = useState('');

    useEffect(() => {
        if (post !== undefined) {
            setContent(post.post);
        }
    }, [post]);

    const hendleEdit = () => {
        mutate({ id, data: { post: content } });
    };

    if (post === undefined) return null;

    return (
        <Col>
            <form>
                <Col gap={2}>
                    <ReactQuill
                        formats={formats123}
                        modules={{
                            toolbar: toolbar123,
                        }}
                        theme="snow"
                        value={content}
                        onChange={setContent}
                    />

                    <Row justifyContent={'flex-end'}>
                        <Button onClick={() => hendleEdit()} variant="contained" color="primary">
                            ОБНОВИТЬ
                        </Button>
                    </Row>
                </Col>
            </form>
        </Col>
    );
};
