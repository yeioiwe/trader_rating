'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    router.push('/dashboard');
    return (
        <div>
            <p>admin main home page init</p>
        </div>
    );
}
