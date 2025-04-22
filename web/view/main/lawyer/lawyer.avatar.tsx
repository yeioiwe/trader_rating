import theme from '@/shared/config/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const LawyerAvatar = ({ avatar, name }: { avatar: string; name: string }) => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <Col
            width={isSm ? '100%' : undefined}
            justifyContent={isSm ? 'center' : undefined}
            alignItems={'center'}
            gap={0.4}
        >
            <Image
                width={210}
                height={210}
                src={avatar}
                style={{ borderRadius: '50%', border: '8px solid #69B2E4' }}
                alt="lawyer"
            />

            <Typography fontSize={24} color="white" fontWeight={700} textAlign={'center'}>
                {name}
            </Typography>

            <Typography fontWeight={300} fontSize={20} color="white">
                {t('main.lawyer.avatar.description')}
            </Typography>
        </Col>
    );
};
