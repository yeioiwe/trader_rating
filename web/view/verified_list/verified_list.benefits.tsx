import BenefitsHandsIcon from '@/public/icons/benefits_hands.svg';
import BenefitsInvestIcon from '@/public/icons/benefits_invest.svg';
import BenefitsLoveIcon from '@/public/icons/benefits_love.svg';
import BenefitsShieldIcon from '@/public/icons/benefits_shield.svg';
import BenefitsTimeIcon from '@/public/icons/benefits_time.svg';
import BenefitsIcon from '@/public/icons/verified_benefits.svg';
import theme from '@/shared/config/theme/theme';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

export const VerifiedListBenefits = () => {
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));       
    return (
        <Col gap={1.75}>
            <Row gap={2} justifyContent={'flex-start'}>
                <BenefitsIcon />

                <Typography fontWeight={700} fontSize={isSm ? 15 : 24}>
                    Преимущества проверенных проектов
                </Typography>
            </Row>

            <Typography fontSize={16} color={'#918C8C'} fontWeight={300}>
                Сравните эти 4 пункта с другими рейтингами и поймете, чем мы отличаемся.
            </Typography>

            <Col bgcolor={'#ECF2FF'} borderRadius={'19px'} p={3} gap={2}>
                <BenefitsItem
                    position={1}
                    icon={<BenefitsShieldIcon />}
                    title="Безопасность"
                    description="Сотрудничество с проверенными трейдерами значительно снижает риски мошенничества, обеспечивая защиту ваших средств и данных. Надежные партнеры работают в рамках установленных правил и стандартов."
                />
                <BenefitsItem
                    position={2}
                    icon={<BenefitsLoveIcon />}
                    title="Прозрачность"
                    description="Трейдеры с подтвержденной репутацией предоставляют честную торговую историю, открытую для анализа. Вы можете проверить их предыдущие сделки, отзывы клиентов и уровень успешности, что исключает неприятные сюрпризы."
                />
                <BenefitsItem
                    position={3}
                    icon={<BenefitsTimeIcon />}
                    title="Надежные сделки"
                    description="Гарантированное быстрое и безопасное выполнение транзакций. Проверенные трейдеры работают с эффективными инструментами и надежными платформами, что минимизирует задержки и технические риски."
                />
                <BenefitsItem
                    position={4}
                    icon={<BenefitsHandsIcon />}
                    title="Поддержка"
                    description="Профессиональные трейдеры не только совершают сделки, но и помогают своим клиентам, консультируют по важным вопросам, делятся опытом и дают рекомендации, способствующие вашему успеху в трейдинге."
                />
            </Col>

            <Row gap={2} justifyContent={'flex-start'} mt={4}>
                <BenefitsInvestIcon />

                <Typography fontWeight={700} fontSize={isSm ? 13 : 24}>
                    Доверяйте профессионалам – инвестируйте с умом
                </Typography>
            </Row>

            <Typography fontWeight={300} fontSize={16}>
                В мире трейдинга важно не только избегать мошенников, но и находить тех, кому действительно можно
                доверять. Проверенные трейдеры – это профессионалы с реальными результатами, прозрачной стратегией и
                честным подходом к работе. Они не обещают золотых гор, но предоставляют четкие анализы, используют
                проверенные методы и всегда предупреждают о возможных рисках.
            </Typography>

            <Typography fontWeight={300} fontSize={16}>
                Работа с надежными трейдерами – это ваш шанс стабильно зарабатывать на инвестициях, не опасаясь обмана.
                Если вы хотите уверенно двигаться по пути финансового роста, выбирайте тех, кто доказал свою
                компетентность временем, отзывами и успешными сделками. Ваш капитал в надежных руках – залог спокойствия
                и уверенности в завтрашнем дне!
            </Typography>
        </Col>
    );
};

const BenefitsItem = ({
    position,
    title,
    description,
    icon,
}: {
    position: number;
    title: string;
    description: string;
    icon: ReactNode;
}) => {
    return (
        <Col px={4.5} py={3} bgcolor={'#FFFFFF'} borderRadius={'9px'} width={'100%'} gap={2} position={'relative'}>
            <Box display={'flex'} position={'absolute'} right={20} top={20}>
                {icon}
            </Box>

            <Row justifyContent={'flex-start'} gap={2}>
                <Row
                    bgcolor={'#ECF2FF'}
                    width={30}
                    height={30}
                    borderRadius={'7px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography fontWeight={700}>{position}</Typography>
                </Row>

                <Typography fontSize={20} fontWeight={700}>
                    {title}
                </Typography>
            </Row>

            <Typography fontSize={14} fontWeight={300}>
                {description}
            </Typography>
        </Col>
    );
};
