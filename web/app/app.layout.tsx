'use client';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Footer } from '@/view/layout/footer/footer';
import { StripBar } from '@/view/layout/footer/strip.bar';
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
                <Container maxWidth="xl">
                    <Row justifyContent={'space-between'} alignItems={'flex-start'} gap={2}>
                        {children}
                        <SideBarMain />
                    </Row>
                </Container>

                <Footer />
                <StripBar />
            </Col>
        </ThemeProvider>
    );
};
