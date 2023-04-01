import React from 'react';
import {classNames} from 'shared';
import {useTranslation} from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('page render error')}</h1>
        </div>
    );
};
