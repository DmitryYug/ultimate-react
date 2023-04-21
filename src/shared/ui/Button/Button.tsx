import React from 'react';
import { classNames } from 'shared';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    btnStyle?: ThemeButton
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        btnStyle,
        ...rest
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[btnStyle]])}
            {...rest}
        >
            {children}
        </button>
    );
};
