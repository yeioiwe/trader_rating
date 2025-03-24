import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const font = Inter({ weight: ['400', '500', '700'], subsets: ['latin', 'cyrillic'] });

const theme = createTheme({
    palette: {
        background: {
            default: 'rgb(238 238 238)',
        },
    },
    typography: {
        allVariants: {
            color: '#3F3844',
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
            },
        },
    },
});

export default theme;
