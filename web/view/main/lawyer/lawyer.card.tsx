import { Row } from '@/shared/ui/boxes';
import { LaweyrAbout } from './lawyer.about';
import { LawyerAvatar } from './lawyer.avatar';

export const LawyerCard = () => {
    return (
        <Row
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            gap={4}
            pl={6.75}
            pr={2.75}
            py={3.5}
            borderRadius={'19px'}
            sx={{ background: 'linear-gradient(240deg, #4F7289 -17.16%, #42A5F5 90.48%)' }}
        >
            <LawyerAvatar />

            <LaweyrAbout />
        </Row>
    );
};
