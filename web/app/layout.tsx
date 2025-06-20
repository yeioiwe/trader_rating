import type { Metadata } from 'next';
import { AppLayout } from './app.layout';
import ChatLayout from './chat';
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-8MNRF9T3XL';

export const metadata: Metadata = {
    title: 'Рейтинги трейдеров - отзывы, проверки и топ-прогнозы на криптовалютные проекты от ANTI SCAMER',
    description: 'Рейтинги трейдеров от ANTI SCAMER | Честные отзывы и аналитика | Новости и статьи по криптовалютам, блокчейну, майнингу и инвестициям | Проверки компаний и брокеров',
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

                <meta name="google-site-verification" content="atr7ShW9vzg8anq9CR7PL2JnCeN_3UEmFsyiXEnZdLY" />


                <Script type="text/javascript" >
                    {`
                    (function(m,e,t,r,i,k,a){m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(102183547, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
                    });
                    `}
                </Script>

                <noscript><div><img src="https://mc.yandex.ru/watch/102183547" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>

            </head>
            <body>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
