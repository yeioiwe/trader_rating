import { Box, Typography } from '@mui/material';
import { Dispatch, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const UploadAvatar = ({ img, setImg }: { img: any; setImg: Dispatch<any> }) => {
    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            const file = acceptedFiles.at(0);

            if (file) {
                const base64 = await fileToBase64(file);
                setImg(base64);
            }
        },
        [img, setImg],
    );

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        },
    });

    return (
        <Box width={220}>
            <Box
                display={'flex'}
                alignItems={'center'}
                height={56}
                p={1}
                bgcolor={'#eeeeee'}
                {...getRootProps()}
                border={'1px solid black'}
                borderRadius={'6px'}
            >
                <input {...getInputProps()} />
                {acceptedFiles.length > 0 ? (
                    acceptedFiles.at(0)?.name
                ) : (
                    <Typography>Нажмите для загрузки...</Typography>
                )}
            </Box>
        </Box>
    );
};

export async function fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = event => {
            resolve(event.target?.result);
        };

        reader.onerror = error => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}
