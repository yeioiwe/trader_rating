import Logo from '@/public/logo.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Container, Divider, Link, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box bgcolor={'#ECF2FF'} mt={10} width={'100%'} py={5} mb={'50px'}>
            <Container maxWidth="xl">
                <Col gap={4.5}>
                    <Logo />

                    <Col gap={3}>
                        <Divider />

                        <Row justifyContent={'space-between'}>
                            <Link href={'/'}>
                                <Typography fontWeight={700} fontSize={21}>
                                    Главная
                                </Typography>
                            </Link>

                            <Link href={'/verified'}>
                                <Typography fontWeight={700} fontSize={21}>
                                    Проверенные
                                </Typography>
                            </Link>

                            <Link href={'/scammers'}>
                                <Typography fontWeight={700} fontSize={21}>
                                    Мошенники
                                </Typography>
                            </Link>

                            <Link href={'/news'}>
                                <Typography fontWeight={700} fontSize={21}>
                                    Новости
                                </Typography>
                            </Link>

                            <Link href={'/posts'}>
                                <Typography fontWeight={700} fontSize={21}>
                                    Статьи
                                </Typography>
                            </Link>
                        </Row>

                        <Divider />
                    </Col>

                    <Row justifyContent={'space-between'}>
                        <Col justifyContent={'flex-start'}>
                            <Typography>Copyright © 2025 anti-scamer.ru</Typography>
                            <Typography>All Rights Reserved.</Typography>
                        </Col>

                        <Col alignItems={'flex-end'} gap={2}>
                            <Typography fontSize={20} fontWeight={700}>
                                anti-scamer@onionmail.org
                            </Typography>

                            <Link href={'https://google.com'}>
                                <Typography sx={{ textDecoration: 'none', color: 'inherit' }}>
                                    Пользовательское соглашение
                                </Typography>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </Box>
    );
};
