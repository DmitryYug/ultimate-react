import React from 'react';
import { Button, classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './Translate.module.scss';

interface TranslateProps {
    className?: string
}

export const Translate: React.FC<TranslateProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.Translate, {}, [className, ThemeButton.CLEAR])}
            onClick={translate}
        >
            {t('translate')}
        </Button>
    );
};
