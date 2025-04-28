import { Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const NavbarLinks = [
    { name: 'Главная', url: '/' },
    { name: 'Проверенные', url: '/verified' },
    { name: 'Мошенники', url: '/scammers' },
    { name: 'Новости', url: '/news' },
    { name: 'Статьи', url: '/posts' },
];

export const HederNavbar = () => {
    return (
        <Row justifyContent={'space-between'} my={2}>
            {NavbarLinks.map((b, i) => (
                <NavbarButton key={i} name={b.name} url={b.url} />
            ))}
        </Row>
    );
};

const NavbarButton = ({ name, url }: { name: string; url: string }) => {
    const router = useRouter();
    return (
        <Box
            onClick={() => router.push(url)}
            borderRadius={'13px'}
            px={3}
            py={1}
            sx={{ '&:hover': { bgcolor: '#ECF2FF' }, cursor: 'pointer' }}
        >
            <Typography fontSize={20} fontWeight={700}>
                {name}
            </Typography>
        </Box>
    );
};
