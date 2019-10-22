import React from 'react';
import { useTheme } from '../../hooks/useTheme';

import './ThemeButton.scss';

const LightIcon: React.FC = () => {
    return (
        <svg className="light-theme-icon" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
            <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
    );
};

const DarkIcon: React.FC = () => {
    return (
        <svg className="dark-theme-icon" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
            <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" />
        </svg>
    );
};

export const ThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="switch">
            <input checked={theme === 'dark'} onChange={toggleTheme} type="checkbox" />
            <span className="slider round">
                <LightIcon />
                <DarkIcon />
                <div className="icon-background" />
            </span>
        </label>
    );
};
