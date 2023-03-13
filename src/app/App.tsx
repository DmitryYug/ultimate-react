import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import './styles/index.scss'

export const App = () => {

    const {theme, themeToggle} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>main page</Link>
            <Link to={'/about'}>about page</Link>
            <button onClick={themeToggle}>
                toggle theme
            </button>
            <Suspense fallback={
                <div>
                    Loading...
                </div>
            }>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};