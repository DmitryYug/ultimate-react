import React from 'react';

import {classNames} from "shared";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink
                to={'/'}
                theme={AppLinkTheme.INVERTED}
            >
                {t("main link")}
            </AppLink>
            <AppLink
                to={'/about'}
                theme={AppLinkTheme.INVERTED}
            >
                {t("about link")}
            </AppLink>
        </div>
    );
}

