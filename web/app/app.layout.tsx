'use client';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Footer } from '@/view/layout/footer/footer';
import { FooterMobile } from '@/view/layout/footer/mobile/footer.mobile';
import { StripBar } from '@/view/layout/footer/strip.bar';
import { HeaderMain } from '@/view/layout/header/header.main';
import { HeaderMobile } from '@/view/layout/header/mobile/header.mobile';
import { SideBarMain } from '@/view/layout/sidebar/sidebar.main';
import { Container, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import React from 'react';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
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
    );
};
