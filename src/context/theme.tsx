import React from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export type Theme = 'dark' | 'light';

export interface ThemeContext {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    themed: (classes: string) => string;
}

// Default context, we won't reach this point cause this context will be provided at App level
const voidContext: ThemeContext = {
    theme: 'light',
    setTheme: theme => {},
    toggleTheme: () => {},
    themed: classes => `${classes} light`,
};

export const ThemeContextValue = React.createContext<ThemeContext>(voidContext);

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useLocalStorageState<Theme>(
        'people-finder-theme',
        'light'
    );

    const toggleTheme = (): void => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const themed = (classes: string) => {
        return `${classes} ${theme}`;
    };

    const themeHandler: ThemeContext = {
        theme,
        setTheme,
        toggleTheme,
        themed,
    };

    return (
        <ThemeContextValue.Provider value={themeHandler}>
            {children}
        </ThemeContextValue.Provider>
    );
};
