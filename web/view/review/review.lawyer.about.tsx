import { usePagesGetLawyerProfile } from "@/shared/config/api/pages/pages";
import { Box } from "@mui/material";

export const ReviewLawyerProfile = () => {
    const { data: lawyerProfile } = usePagesGetLawyerProfile();

    if (lawyerProfile === undefined) return null;
    if (lawyerProfile.items === null) return null;

    return  <Box
    maxWidth={'100%'}
    sx={{
        img: { width: '100%' },
        iframe: { width: '100%', minHeight: '500px' },
    }}
>
    <div className="ql-editor" style={{ width: '100%', boxSizing: 'border-box', padding: 0 }}>
        <div
            style={{ width: '100%', boxSizing: 'border-box' }}
            dangerouslySetInnerHTML={{ __html: lawyerProfile.items.profile }}
        />
    </div>
</Box>
};
