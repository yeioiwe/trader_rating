'use client';
import Logo from '@/public/logo.svg';
import { usePagesGetHeaderBanner } from '@/shared/config/api/pages/pages';
import { Row } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { HederYoutubeBanner, LawyerBanner } from './header.banners';

export const HeaderLogo = () => {
    const { data: banner } = usePagesGetHeaderBanner();
    const router = useRouter();

    if (banner === undefined) return null;
    return (
        <Row justifyContent={'space-between'}>
            <Logo onClick={() => router.push('/')} style={{ cursor: 'pointer' }} />

            {banner.bannerType === 'YOUTUBE' && <HederYoutubeBanner url={banner.url} />}
            {banner.bannerType === 'LAWYER' && <LawyerBanner url={banner.url} />}
        </Row>
    );
};
