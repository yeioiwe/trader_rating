import TrustIcon1 from '@/public/icons/trust_icon_1.svg';
import TrustIcon2 from '@/public/icons/trust_icon_2.svg';
import TrustIcon3 from '@/public/icons/trust_icon_3.svg';
import TrustIcon4 from '@/public/icons/trust_icon_4.svg';
import theme from '@/shared/config/theme/theme';
import { Col } from '@/shared/ui/boxes';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TrustItem } from './trust.item';

export const TrustList = () => {
    const { t } = useTranslation();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Col p={2.5} bgcolor={'#ECF2FF'} borderRadius={'19px'} gap={2.25}>
            <Box
                display={'flex'}
                flexDirection={isSm ? 'column' : 'row'}
                justifyContent={'space-between'}
                alignItems={'stretch'}
                gap={2}
            >
                <TrustItem
                    icon={<TrustIcon1 />}
                    sortNumber={1}
                    description="Наш рейтинг основан на объективных данных: доходности, рисках и отзывах реальных пользователей."
                />

                <TrustItem
                    icon={<TrustIcon2 />}
                    sortNumber={2}
                    description="Мы регулярно обновляем показатели, чтобы отражать актуальное состояние рынка и трейдеров."
                />

                <TrustItem
                    icon={<TrustIcon3 />}
                    sortNumber={3}
                    description="Места в рейтинге нельзя купить, всё основано на фактических результатах."
                />

                <TrustItem
                    icon={<TrustIcon4 />}
                    sortNumber={4}
                    description="Наши аналитики изучают стратегии трейдеров, исключая мошенников и манипуляции."
                />
            </Box>

            <Col p={0.25} gap={2}>
                <Typography fontWeight={500}>
                    Наш рейтинг – это не просто список успешных трейдеров, а тщательно проанализированная база данных,
                    основанная на прозрачной методологии, реальных показателях доходности, рисках и отзывах
                    пользователей. Мы регулярно обновляем данные, чтобы рейтинг всегда отражал актуальное состояние
                    рынка и эффективность трейдеров. В нем нет платных мест – все позиции основаны исключительно на
                    фактических результатах, без рекламы и манипуляций.
                </Typography>

                <Typography fontWeight={500}>
                    Дополнительно наши аналитики проводят экспертную проверку стратегий, чтобы исключить мошенников и
                    обеспечить максимальную объективность. Такой подход помогает инвесторам ориентироваться в мире
                    криптовалют, принимать взвешенные решения и защищает их от рисков. Наша цель – сделать крипторынок
                    прозрачнее, безопаснее и доступнее для каждого пользователя.
                </Typography>
            </Col>
        </Col>
    );
};

const FullListButton = ({ text }: { text: string }) => {
    return (
        <Button sx={{ bgcolor: 'white', borderRadius: '9px', minWidth: 250, minHeight: 50 }}>
            <Typography color="#5297FF" fontSize={16} fontWeight={700}>
                {text}
            </Typography>
        </Button>
    );
};
