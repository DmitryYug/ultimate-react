import React from "react";

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/navbar";

import './styles/index.scss'

export const App = () => {

    const {theme, themeToggle} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={themeToggle}>
                toggle theme
            </button>
        </div>
    );
};