import { useContext } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Themes } from './ThemeContext';

interface UseThemeReturnType {
    themeToggle: () => void;
    theme: Themes;
}

export function useTheme(): UseThemeReturnType {
    const { setTheme, theme } = useContext(ThemeContext);

    const themeToggle = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        themeToggle,
    };
}
