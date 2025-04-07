import LikeIcon from '@/public/icons/profile_like_icon.svg';
import ProfileLink from '@/public/icons/profile_link.svg';
import OverviewIcon from '@/public/icons/profile_overview_icon.svg';
import WatchIcon from '@/public/icons/profile_watch_icon.svg';
import { useScammersGetOne } from '@/shared/config/api/scammers/scammers';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

export const ScammersProfileOverview = ({ id }: { id: string }) => {
    const { data: profile, isError } = useScammersGetOne(id);

    if (profile?.about === undefined) return null;

    return (
        <Col gap={2}>
            <Col width={'100%'} border={'3px solid #C53D3D'} gap={1} p={2.25} borderRadius={'9px'}>
                <Row gap={2} justifyContent={'flex-start'}>
                    <OverviewIcon />
                    <Typography fontSize={21} fontWeight={500}>
                        Обзор проекта {profile.name}
                    </Typography>
                </Row>

                <Box
                    maxWidth={'100%'}
                    sx={{
                        img: { width: '100%' },
                        iframe: { width: '100%', minHeight: '500px' },
                        //color: 'dark.main',
                    }}
                >
                    <div className="ql-editor" style={{ width: '100%', boxSizing: 'border-box', padding: 0 }}>
                        <div
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            dangerouslySetInnerHTML={{ __html: profile?.about }}
                        />
                    </div>
                </Box>
            </Col>

            <ScammersProfileLike like={profile.profileLikes} watch={profile.profileViews} />
        </Col>
    );
};

const ScammersProfileLike = ({ like, watch }: { like: number; watch: number }) => {
    return (
        <Row justifyContent={'space-between'}>
            <Row gap={2}>
                <Row
                    gap={4}
                    bgcolor={'#ECF2FF'}
                    border={'2px solid #69B2E4'}
                    borderRadius={'9px'}
                    sx={{ cursor: 'pointer' }}
                    px={1.5}
                    minHeight={'55px'}
                >
                    <LikeIcon />

                    <Typography color={'#69B2E4'} fontSize={24} fontWeight={500}>
                        {like}
                    </Typography>
                </Row>

                <ScammersProfileLink />
            </Row>

            <Row
                gap={4}
                bgcolor={'#ECF2FF'}
                border={'2px solid #69B2E4'}
                borderRadius={'9px'}
                px={1.5}
                minHeight={'55px'}
            >
                <WatchIcon />

                <Typography color={'#69B2E4'} fontSize={24} fontWeight={500}>
                    {watch}
                </Typography>
            </Row>
        </Row>
    );
};

const ScammersProfileLink = () => {
    return (
        <Box
            sx={{ cursor: 'pointer' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'55px'}
            minWidth={'55px'}
            bgcolor={'#ECF2FF'}
            border={'2px solid #69B2E4'}
            borderRadius={'9px'}
        >
            <ProfileLink />
        </Box>
    );
};
