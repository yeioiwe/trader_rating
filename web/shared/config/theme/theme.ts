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

    typography: {
        allVariants: font.style,
    },
});

export default theme;
