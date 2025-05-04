import LogoMobile from '@/public/logo_mobile.svg';
import { Col } from '@/shared/ui/boxes';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

export const FooterMobile = () => {
    return (
        <Box bgcolor={'#ECF2FF'} mt={10} width={'100%'} py={4}>
            <Container maxWidth="xl">
                <Col gap={2}>
                    <LogoMobile />

                    <Typography fontSize={20} fontWeight={700}>
                        anti-scamer@onionmail.org
                    </Typography>

                    <Link href={'https://google.com'}>
                        <Typography sx={{ textDecoration: 'none', color: 'inherit' }}>
                            Пользовательское соглашение
                        </Typography>
                    </Link>

                    <Col justifyContent={'flex-start'}>
                        <Typography>Copyright © 2025 anti-scamer.ru</Typography>
                        <Typography>All Rights Reserved.</Typography>
                    </Col>
                </Col>
            </Container>
        </Box>
    );
};
