'use client';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { NewsEditCommentCreate, NewsEditCommentList } from './news.edit.comments';
import { NewsEditPost } from './news.edit.post';

export const NewsEditMain = ({ id }: { id: number }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Col width={'100%'} gap={4}>
            <Row gap={2} justifyContent={'flex-start'}>
                <Typography fontSize={21} fontWeight={700}>
                    Реадктирование новости
                </Typography>
            </Row>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Новость" {...a11yProps(0)} />
                        <Tab label="Комментарии" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Col width={'100%'} gap={2}>
                        <NewsEditPost id={id} />
                    </Col>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <Col width={'100%'} gap={2}>
                        <NewsEditCommentCreate id={id} />

                        <NewsEditCommentList id={id} />
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
