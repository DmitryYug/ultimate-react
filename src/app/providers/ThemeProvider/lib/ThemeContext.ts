import React from 'react';

export enum Themes {
    LIGHT = 'light',
    DARK = 'dark'
}
export interface ThemeInterface {
    theme?: Themes
    setTheme?: (theme: Themes) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const ThemeContext = React.createContext<ThemeInterface>({});

export default ThemeContext;
