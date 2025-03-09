import InfoIcon from '@/public/icons/info.svg';
import WarningIcon from '@/public/icons/layout_warning.svg';
import { Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const ScammersTitle = () => {
    return (
        <Row justifyContent={'flex-start'} gap={3}>
            <Row gap={1.5}>
                <WarningIcon />

                <Typography fontSize={21} fontWeight={700}>
                    Список мошенников
                </Typography>
            </Row>

            <InfoIcon />
        </Row>
    );
};
