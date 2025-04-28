'use client';
import { usePostGetOne } from '@/config/api/post/post';
import { Col } from '@/shared/ui/boxes';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { PostEditCommentCreate, PostEditCommentList } from './post.edit.comments';
import { PostEditContent } from './post.edit.content';
import { PostEditPreview } from './post.edit.preview';

export const PostEditMain = ({ id }: { id: number }) => {
    const { data: post } = usePostGetOne(id);

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    if (post === undefined) return null;
    return (
        <Col width={'100%'} gap={4}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Пост" {...a11yProps(0)} />
                        <Tab label="Комментарии" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Col width={'100%'} gap={2}>
                        <PostEditPreview id={id} />

                        <PostEditContent id={id} />
                    </Col>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <Col width={'100%'} gap={2}>
                        <PostEditCommentCreate id={id} />

                        <PostEditCommentList id={id} />
                    </Col>
                </CustomTabPanel>
            </Box>
        </Col>
    );
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
