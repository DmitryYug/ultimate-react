import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './syles/index.scss'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};