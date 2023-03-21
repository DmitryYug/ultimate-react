import React from "react";
import {classNames} from "shared";
import cls from './ThemeToggle.module.scss'
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeToggleProps {
    className?: string
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({className}) => {
    const {theme, themeToggle} = useTheme()

    return (
        <button onClick={themeToggle}
                className={classNames(cls.ThemeToggle, {}, [className])}
        >
            toggle theme
        </button>
    );
}

