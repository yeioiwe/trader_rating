import { Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

const NavbarDemo = ['Главная', 'Проверенные', 'Мошенники', 'Новости', 'Статьи'];

export const HederNavbar = () => {
    return (
        <Row justifyContent={'space-between'} mt={2}>
            {NavbarDemo.map((b, i) => (
                <NavbarButton key={i} name={b} />
            ))}
        </Row>
    );
};

const NavbarButton = ({ name }: { name: string }) => {
    return (
        <Box borderRadius={'13px'} px={3} py={1} sx={{ '&:hover': { bgcolor: '#ECF2FF' }, cursor: 'pointer' }}>
            <Typography fontSize={20} fontWeight={700}>
                {name}
            </Typography>
        </Box>
    );
};
