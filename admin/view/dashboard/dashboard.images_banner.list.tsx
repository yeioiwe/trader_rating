'use client';
import { queryClient } from '@/config/api/api.axios';
import { ImagesBannerItem } from '@/config/api/api.schemas';
import {
    getPagesGetImagesBannerQueryKey,
    usePagesDeleteImagesBanner,
    usePagesGetImagesBanner,
} from '@/config/api/pages/pages';
import { Col, Row } from '@/shared/ui/boxes';
import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton, Tooltip, Typography } from '@mui/material';

export const DashboardImagesBannerList = () => {
    const { data: images } = usePagesGetImagesBanner();

    if (images === undefined) return null;
    return (
        <Col gap={2}>
            <Row gap={4} justifyContent={'flex-start'}>
                <Typography>Список активных картинок баннера :</Typography>
            </Row>

            <Col gap={2}>
                {images.items.map((image, i) => (
                    <DashboardImagesBannerItem image={image} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const DashboardImagesBannerItem = ({ image }: { image: ImagesBannerItem }) => {
    const { mutate } = usePagesDeleteImagesBanner();

    const handleDelete = () => {
        mutate(
            { id: image.id },
            { onSuccess: () => queryClient.invalidateQueries({ queryKey: getPagesGetImagesBannerQueryKey() }) },
        );
    };

    return (
        <Row
            py={1.5}
            px={2}
            border={'2px solid rgb(212 212 212)'}
            borderRadius={'9px'}
            justifyContent={'space-between'}
        >
            <Row gap={4}>
                <Typography>{image.name}</Typography>

                <Tooltip title={image.url}>
                    <LaunchIcon />
                </Tooltip>
            </Row>

            <IconButton onClick={() => handleDelete()}>
                <DeleteIcon />
            </IconButton>
        </Row>
    );
};
