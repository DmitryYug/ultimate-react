import React from 'react';

import {classNames} from "shared";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeToggle} from "widgets/ThemeToggle";

import cls from './Navbar.module.scss'
import ThemeLight from 'shared/assets/icons/ThemeLight.svg'
import ThemeDark from 'shared/assets/icons/ThemeDark.svg'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeLight/>
            <ThemeDark/>
            <ThemeToggle/>
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

