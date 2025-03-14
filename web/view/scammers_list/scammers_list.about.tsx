import AboutCardIcon from '@/public/icons/scammers_about_card.svg';
import AboutFileIcon from '@/public/icons/scammers_about_file.svg';
import AboutOperatorIcon from '@/public/icons/scammers_about_operator.svg';
import AboutPostIcon from '@/public/icons/scammers_about_post.svg';
import AboutTalkIcon from '@/public/icons/scammers_about_talk.svg';

import ScammersTitleIcon from '@/public/icons/scammers_about_title.svg';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export const ScammersListAbout = () => {
    return (
        <Col gap={1.75}>
            <Row gap={2} justifyContent={'flex-start'}>
                <ScammersTitleIcon />

                <Typography fontWeight={700} fontSize={24}>
                    Как распознать мошенников?
                </Typography>
            </Row>

            <Typography fontSize={16} color={'#918C8C'} fontWeight={300}>
                Сравните эти 4 пункта с другими рейтингами и поймете, чем мы отличаемся.
            </Typography>

            <Col bgcolor={'#ECF2FF'} borderRadius={'19px'} p={3} gap={2}>
                <AboutItem
                    position={1}
                    icon={<AboutTalkIcon />}
                    title="Нереалистичные обещания и гарантии"
                    description="Обещания 100% прибыли, отсутствие рисков, стабильный доход в любых рыночных условиях – это явные признаки обмана. В трейдинге всегда есть риски, и никто не может гарантировать вам доход."
                />
                <AboutItem
                    position={2}
                    icon={<AboutFileIcon />}
                    title="Отсутствие прозрачности"
                    description="Настоящие трейдеры и платформы открыто предоставляют информацию о лицензиях, регистрации и команде. Мошенники скрывают данные, используют фальшивые документы или избегают вопросов о легальности своей деятельности."
                />
                <AboutItem
                    position={3}
                    icon={<AboutOperatorIcon />}
                    title="Манипуляции и давление"
                    description="Аферисты часто убеждают инвестировать как можно быстрее, обещая 'уникальную возможность'. Они могут навязывать услуги, звонить, писать в мессенджерах и даже угрожать упущенной выгодой."
                />
                <AboutItem
                    position={4}
                    icon={<AboutCardIcon />}
                    title="Проблемы с выводом средств"
                    description="Попав в их ловушку, можно не только потерять деньги, но и оказаться в долгах. Долгие задержки выплат, блокировка аккаунтов, отказ в возврате денег, это все, что вы получите."
                />
            </Col>

            <Row gap={2} justifyContent={'flex-start'} mt={4}>
                <AboutPostIcon />

                <Typography fontWeight={700} fontSize={24}>
                    Будьте бдительны и защищайте свои деньги
                </Typography>
            </Row>

            <Typography fontWeight={300} fontSize={16}>
                Мир трейдинга может быть прибыльным, но только для тех, кто умеет отличать реальных профессионалов от
                мошенников. Аферисты всегда стараются казаться убедительными: они показывают фальшивые успехи,
                придумывают "эксклюзивные" стратегии и играют на эмоциях инвесторов. Но правда в том, что честный
                трейдинг – это всегда риск, и никто не может гарантировать вам стабильную прибыль.
            </Typography>

            <Typography fontWeight={300} fontSize={16}>
                Не позволяйте мошенникам играть на вашей жадности или страхе упустить возможность. Помните, что лучшая
                инвестиция – это инвестиция в знания. Изучайте рынок, проверяйте репутацию трейдеров, читайте реальные
                отзывы и доверяйте только проверенным профессионалам. Ваши деньги – это ваша ответственность, а
                осведомленность и осторожность помогут вам сохранить и приумножить свой капитал.
            </Typography>
        </Col>
    );
};

const AboutItem = ({
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
