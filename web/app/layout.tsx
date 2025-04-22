import type { Metadata } from 'next';
import { AppLayout } from './app.layout';
import ChatLayout from './chat';

export const metadata: Metadata = {
    title: 'ANTI SCAMMER',
    description: 'Description init page',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <ChatLayout />
            </head>
            <body>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
