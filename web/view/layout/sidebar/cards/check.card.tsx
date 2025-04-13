'use client';
import CheckIcon from '@/public/icons/layout_check.svg';
import { Col } from '@/shared/ui/boxes';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { SidebarCard } from './card';

export const CheckCard = () => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <SidebarCard bgcolor={'#ECF2FF'} icon={<CheckIcon />}>
            <Col gap={2}>
                <Col gap={0.5}>
                    <Typography fontSize={20} fontWeight={700}>
                        {t('sidebar.check.title')}
                    </Typography>

                    <Typography color="#B8BDBA" fontSize={16}>
                        {t('sidebar.check.description')}
                    </Typography>
                </Col>

                <Button
                    onClick={() => router.push('/review')}
                    sx={{ bgcolor: '#3BB974', color: '#FFFFFF', minHeight: '50px', borderRadius: '9px' }}
                >
                    <Typography fontSize={20} fontWeight={700}>
                        {t('sidebar.check.button')}
                    </Typography>
                </Button>
            </Col>
        </SidebarCard>
    );
};
