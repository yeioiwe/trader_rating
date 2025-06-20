'use client';
import Logo from '@/public/logo.svg';
import { usePagesGetHeaderBanner } from '@/shared/config/api/pages/pages';
import { Row } from '@/shared/ui/boxes';
import { useRouter } from 'next/navigation';
import { HederYoutubeBanner, LawyerBanner } from './header.banners';
import { Box, CircularProgress } from '@mui/material';

export const HeaderLogo = () => {
    const router = useRouter();

    return (
        <Row justifyContent={'space-between'}>
            <Logo onClick={() => router.push('/')} style={{ cursor: 'pointer' }} />

            <HeaderBanner />
        </Row>
    );
};

const HeaderBanner = () => {
    const { data: banner, isPending } = usePagesGetHeaderBanner();

    if (isPending) return <BannerSkeleton />;
    if (banner === undefined) return null;

    return (
        <>
            {banner.bannerType === 'YOUTUBE' ? <HederYoutubeBanner url={banner.url} /> : <LawyerBanner url={banner.url} />}
        </>
    );
}

export const BannerSkeleton = () => {
    return (
        <Box width={537} height={100} bgcolor={'#ECF2FF'} borderRadius={'8px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress />
        </Box>
    );
};