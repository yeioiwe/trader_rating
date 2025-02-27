import InfoIcon from '@/public/icons/info.svg';
import VerifiedIcon from '@/public/icons/layout_verified.svg';
import { Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const VerifiedTitle = () => {
    return (
        <Row justifyContent={'flex-start'} gap={3}>
            <Row gap={1.5}>
                <VerifiedIcon />

                <Typography fontSize={24} fontWeight={700}>
                    Проверенные трейдеры
                </Typography>
            </Row>

            <InfoIcon />
        </Row>
    );
};
