import { Col } from '@/shared/ui/boxes';
import { Container } from '@mui/material';
import { HeaderLogo } from './header.logo';
import { HederNavbar } from './header.navbar';

export const HeaderMain = () => {
    return (
        <Container maxWidth="xl" sx={{ my: 2 }}>
            <Col>
                <HeaderLogo />
                <HederNavbar />
            </Col>
        </Container>
    );
};
