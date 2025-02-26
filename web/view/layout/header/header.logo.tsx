import Logo from '@/public/logo.svg';
import { Row } from '@/shared/ui/boxes';
import { HederYoutubeBanner } from './header.banners';

export const HeaderLogo = () => {
    return (
        <Row justifyContent={'space-between'}>
            <Logo />
            <HederYoutubeBanner />
        </Row>
    );
};
