'use client';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { HeaderMain } from '@/view/layout/header/header.main';
import { SideBarMain } from '@/view/layout/sidebar/sidebar.main';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Col>
                <HeaderMain />
                <Container maxWidth="lg">
                    <Row justifyContent={'space-between'} alignItems={'flex-start'}>
                        {children}
                        <SideBarMain />
                    </Row>
                </Container>
            </Col>
        </ThemeProvider>
    );
};
