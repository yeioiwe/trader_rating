'use client';
import { queryClient } from '@/shared/config/api/api.axios';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Footer } from '@/view/layout/footer/footer';
import { FooterMobile } from '@/view/layout/footer/mobile/footer.mobile';
import { StripBar } from '@/view/layout/footer/strip.bar';
import { HeaderMain } from '@/view/layout/header/header.main';
import { HeaderMobile } from '@/view/layout/header/mobile/header.mobile';
import { SideBarMain } from '@/view/layout/sidebar/sidebar.main';
import { Container, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import '../shared/config/i18n/i18n';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Col>
                    {isSm ? <HeaderMobile /> : <HeaderMain />}
                    <Container maxWidth="xl">
                        <Row justifyContent={'space-between'} alignItems={'flex-start'} gap={2}>
                            {children}
                            <SideBarMain />
                        </Row>
                    </Container>

                    {isSm ? <FooterMobile /> : <Footer />}

                    <StripBar />
                </Col>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
