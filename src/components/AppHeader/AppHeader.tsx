import React from 'react';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { useTheme } from '../../hooks/useTheme';

import './AppHeader.scss';

export const AppHeader: React.FC = () => {
    const { themed } = useTheme();

    return (
        <div className={themed('app-header-container')}>
            <h1>Model viewer</h1>
            <ThemeButton />
        </div>
    );
};
