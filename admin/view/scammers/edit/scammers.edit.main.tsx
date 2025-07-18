'use client';
import { Col, Row } from '@/shared/ui/boxes';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { ScammerEditCommentCreate } from './comments/scammer.comment.create';
import { ScammerEditCommentList } from './comments/scammer.comment.list';
import { ScammersEdit } from './profile/scammers.edit.profile';
import { ScammerSeoMain } from './seo/seo.main';

export const ScammerEditMain = ({ id }: { id: number }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Col width={'100%'} gap={4}>
            <Row gap={2} justifyContent={'flex-start'}>
                <PersonAddIcon />

                <Typography fontSize={21} fontWeight={700}>
                    Редактирование проекта мошеннка
                </Typography>
            </Row>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Профиль мошенника" {...a11yProps(0)} />
                        <Tab label="Комментарии" {...a11yProps(1)} />
                        <Tab label="SEO заголовки" {...a11yProps(2)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <ScammersEdit id={id} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Col gap={4}>
                        <ScammerEditCommentCreate id={id} />

                        <ScammerEditCommentList id={id} />
                    </Col>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <ScammerSeoMain id={id} />
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
