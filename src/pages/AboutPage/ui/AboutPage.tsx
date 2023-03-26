import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <div>
            <h1>{t('about page')}</h1>
            <p>{t('about page description')}</p>
        </div>
    );
}

export default AboutPage;
