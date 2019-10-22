import React from 'react';
import { useTheme } from './hooks/useTheme';
import { AppHeader } from './components/AppHeader/AppHeader';
import { ModelView } from './components/ModelView/ModelView';

import './App.scss';

const App: React.FC = () => {
    const { themed } = useTheme();

    return (
        <div className={themed('app-container')}>
            <AppHeader />
            <ModelView src="/scene.gltf" />
        </div>
    );
};

export default App;
