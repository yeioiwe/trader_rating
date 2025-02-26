import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] });

const theme = createTheme({
    palette: {
        mode: 'light',

        background: {
            default: '#FFFFF',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1280,
            xl: 1536,
        },
    },
    typography: {
        allVariants: font.style,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
