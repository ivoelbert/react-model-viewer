import { useContext } from 'react';
import { ThemeContextValue, ThemeContext } from '../context/theme';

export const useTheme = (): ThemeContext => {
    return useContext<ThemeContext>(ThemeContextValue);
}