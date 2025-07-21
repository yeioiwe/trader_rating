'use client';
import { queryClient } from '@/config/api/api.axios';
import { GlobalLoadingOverlay } from '@/shared/ui/global.loading.overlay';
import theme from '@/shared/ui/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalLoadingOverlay />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};
