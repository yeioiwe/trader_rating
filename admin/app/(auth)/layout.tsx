import { Row } from '@/shared/ui/boxes';
import { AppLayout } from '../app.layout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppLayout>
                    <Row m={6} gap={4} justifyContent={'flex-start'} alignItems={'flex-start'}>
                        {children}
                    </Row>
                </AppLayout>
            </body>
        </html>
    );
}
