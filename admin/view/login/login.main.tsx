'use client';
import { AuthDto as AuthDtoZod } from '@/config/api/api.zod';
import { useAuthLogin } from '@/config/api/auth/auth';
import { Col } from '@/shared/ui/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, OutlinedInput } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const LoginMain = () => {
    const router = useRouter();
    const { register, handleSubmit, getValues } = useForm({ resolver: zodResolver(AuthDtoZod) });
    const { mutate } = useAuthLogin();

    const handleLogin = () => {
        mutate(
            { data: getValues() },
            {
                onSuccess: data => {
                    localStorage.setItem('authToken', data.authToken);
                    router.push('/dashboard');
                },
            },
        );
    };

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Col gap={2} p={4} bgcolor={'white'} borderRadius={'9px'}>
                    <OutlinedInput {...register('login')} />

                    <OutlinedInput type="password" {...register('password')} />

                    <Button type="submit" variant="contained" color="primary">
                        login
                    </Button>
                </Col>
            </form>
        </Box>
    );
};
