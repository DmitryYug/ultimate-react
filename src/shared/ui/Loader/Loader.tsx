import React from 'react';
import { classNames } from 'shared';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
    <div className={classNames(cls['lds-facebook'], {}, [className])}>
        <div />
        <div />
        <div />
    </div>
);
