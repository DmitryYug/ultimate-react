import React from 'react';

import {classNames} from "shared";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink
                to={'/'}
                theme={AppLinkTheme.INVERTED}
            >
                main page
            </AppLink>
            <AppLink
                to={'/about'}
                theme={AppLinkTheme.INVERTED}
            >
                about page
            </AppLink>
        </div>
    );
}

