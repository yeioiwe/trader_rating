'use client';
import { Col } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const SideBar = () => {
    return (
        <Col gap={1} borderRadius={'9px'}>
            <SideBarButton text="Главная" url="dashboard" />
            <SideBarButton text="Мошенники" url="scammers" />
            <SideBarButton text="Проверка" url="review" />
            <SideBarButton text="Юрист" url="lawyer" />
            <SideBarButton text="Посты" url="post" />
            <SideBarButton text="Новости" url="news" />
        </Col>
    );
};

const SideBarButton = ({ text, url }: { text: string; url: string }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${url}`);
    };

    return (
        <Button onClick={handleClick} sx={{ px: 4, bgcolor: 'white' }}>
            <Typography color="#3F3844" fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};
