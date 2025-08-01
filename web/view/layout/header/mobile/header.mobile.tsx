'use client';
import CloseBurgerIcon from '@/public/icons/close_burger_icon.svg';
import MenuIcon from '@/public/icons/menu_icon.svg';
import MobileLogo from '@/public/logo_mobile.svg';
import { Row } from '@/shared/ui/boxes';
import ArticleIcon from '@mui/icons-material/Article';
import DangerousIcon from '@mui/icons-material/Dangerous';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Container, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const HeaderMobile = () => {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container maxWidth="xl" sx={{ my: 2 }}>
            <Row justifyContent={'space-between'}>
                <Row onClick={() => router.push('/')} sx={{ cursor: 'pointer' }}>
                    <MobileLogo />
                </Row>

                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {anchorEl === null ? <MenuIcon /> : <CloseBurgerIcon />}
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    color="#ECF2FF"
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem sx={{ minWidth: '100vh' }} onClick={() => router.push('/')}>
                        <Row gap={2}>
                            <HomeIcon />

                            <Typography fontSize={21} fontWeight={700}>
                                Главная
                            </Typography>
                        </Row>
                    </MenuItem>

                    <MenuItem sx={{ minWidth: '100vh' }} onClick={() => router.push('/scammers')}>
                        <Row gap={2}>
                            <DangerousIcon />

                            <Typography fontSize={21} fontWeight={700}>
                                Мошенники
                            </Typography>
                        </Row>
                    </MenuItem>

                    <MenuItem sx={{ minWidth: '100vh' }} onClick={() => router.push('/verified')}>
                        <Row gap={2}>
                            <VerifiedIcon />

                            <Typography fontSize={21} fontWeight={700}>
                                Проверенные
                            </Typography>
                        </Row>
                    </MenuItem>

                    <MenuItem sx={{ minWidth: '100vh' }} onClick={() => router.push('/news')}>
                        <Row gap={2}>
                            <NewspaperIcon />

                            <Typography fontSize={21} fontWeight={700}>
                                Новости
                            </Typography>
                        </Row>
                    </MenuItem>

                    <MenuItem sx={{ minWidth: '100vh' }} onClick={() => router.push('/posts')}>
                        <Row gap={2}>
                            <ArticleIcon />

                            <Typography fontSize={21} fontWeight={700}>
                                Отзывы
                            </Typography>
                        </Row>
                    </MenuItem>
                </Menu>
            </Row>
        </Container>
    );
};
