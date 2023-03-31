import React from 'react';
import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound: React.FC<NotFoundProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <h1 className={classNames(cls.NotFound, {}, [className])}>
            {t('not found')}
        </h1>
    );
};
