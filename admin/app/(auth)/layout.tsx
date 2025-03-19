import { Row } from '@/shared/ui/boxes';
import { SideBar } from '@/view/layout/sidebar/sidebar.main';
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
                        <SideBar />
                        {children}
                    </Row>
                </AppLayout>
            </body>
        </html>
    );
}
