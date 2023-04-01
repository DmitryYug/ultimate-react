import React from 'react';
import {useTranslation} from 'react-i18next';

function TranslateTest() {
    const { t } = useTranslation('main');

    return (
        <article>
            <h2>{t('translation example')}</h2>
            <p>{t('lorem')}</p>
        </article>
    );
}

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>
                {t('main page')}
            </h1>
            <TranslateTest />
        </div>
    );
}

export default MainPage;
