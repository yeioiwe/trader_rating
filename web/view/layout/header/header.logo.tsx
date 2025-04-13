'use client';
import Logo from '@/public/logo.svg';
import { Row } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { HederYoutubeBanner } from './header.banners';

export const HeaderLogo = () => {
    const router = useRouter();

    return (
        <Row justifyContent={'space-between'} onClick={() => router.push('/')} sx={{ cursor: 'pointer' }}>
            <Logo />
            <HederYoutubeBanner />
        </Row>
    );
};
