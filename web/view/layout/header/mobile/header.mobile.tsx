import MenuIcon from '@/public/icons/menu_icon.svg';
import MobileLogo from '@/public/logo_mobile.svg';
import { Row } from '@/shared/ui/boxes';
import { Container, IconButton } from '@mui/material';

export const HeaderMobile = () => {
    return (
        <Container maxWidth="xl" sx={{ my: 2 }}>
            <Row justifyContent={'space-between'}>
                <MobileLogo />

                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Row>
        </Container>
    );
};
