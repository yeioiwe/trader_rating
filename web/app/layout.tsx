import type { Metadata } from 'next';
import { AppLayout } from './app.layout';
import ChatLayout from './chat';
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-8MNRF9T3XL';

export const metadata: Metadata = {
    title: 'ANTI SCAMER',
    description: 'Информационная платформа, ориентированная на изучение и анализ онлайн-ресурсов, связанных с финансовой активностью в интернете. Предоставляем пользователям достоверные сведения для понимания сути и структуры цифровых проектов, сайтов и площадок.',
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

                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        });
                    `}
            </Script>
            </head>
            <body>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
