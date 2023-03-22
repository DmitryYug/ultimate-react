import React from "react";
import {Button, classNames} from "shared";
import cls from './ThemeToggle.module.scss'
import {Themes, useTheme} from "app/providers/ThemeProvider";
import ThemeLight from 'shared/assets/icons/ThemeLight.svg'
import ThemeDark from 'shared/assets/icons/ThemeDark.svg'
import {ThemeButton} from "shared/ui/Button/Button";

interface ThemeToggleProps {
    className?: string
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({className}) => {
    const {theme, themeToggle} = useTheme()

    return (
        <Button onClick={themeToggle}
                className={classNames(cls.ThemeToggle, {}, [className])}
                theme={ThemeButton.CLEAR}
        >
            {theme === Themes.LIGHT
                ? <ThemeDark width={30} height={30}/>
                : <ThemeLight width={30} height={30}/>
            }
        </Button>
    );
}

