'use client';
import { Col } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const SideBar = () => {
    return (
        <Col px={4} py={3} gap={2} bgcolor={'white'} borderRadius={'9px'}>
            <SideBarButton text="Главная" url="dashboard" />
            <SideBarButton text="Мошенники" url="scammers" />
            <SideBarButton text="Проверенные" url="dashboard" />
            <SideBarButton text="Юрист" url="dashboard" />
            <SideBarButton text="Ссылки" url="dashboard" />
        </Col>
    );
};

const SideBarButton = ({ text, url }: { text: string; url: string }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${url}`);
    };

    return (
        <Button onClick={handleClick} sx={{ px: 4, bgcolor: 'rgb(238 238 238)' }}>
            <Typography color="#3F3844" fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};
