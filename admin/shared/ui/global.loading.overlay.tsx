import { Backdrop, CircularProgress } from '@mui/material';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

export const GlobalLoadingOverlay = () => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    const loading = isFetching > 0 || isMutating > 0;

    return (
        <Backdrop
            open={loading}
            sx={{
                color: '#fff',
                zIndex: theme => theme.zIndex.drawer + 9999, // Поверх всего
            }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
