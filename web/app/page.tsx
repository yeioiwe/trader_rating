'use client';
import { useTranslation } from 'react-i18next';
import '../config/i18n/i18n';

export default function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('main.title')}</h1>
        </div>
    );
}
