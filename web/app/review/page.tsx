import { ReviewMain } from '@/view/review/review.main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Проверить проект или трейдера — Anti-Scamer',
    description:
        'Узнайте, стоит ли доверять проекту — отправьте запрос на проверку и получите разбор по ключевым рискам.',
    alternates: {
        canonical: `https://anti-scamer.ru/review`,
    },
};

export default function RewiewPage() {
    return <ReviewMain />;
}
