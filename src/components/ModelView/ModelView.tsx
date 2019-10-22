import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import '@google/model-viewer';

interface Props {
    src: string;
}

export const ModelView: React.FC<Props> = props => {
    const { src } = props;
    const { themed, theme } = useTheme();

    const ModelViewerComponent = 'model-viewer' as any;
    const viewerStyle: React.CSSProperties = {
        width: '100%',
        height: '200px',
    };

    const viewerBackgroundColor: string = theme === 'dark' ? '#1b1b1b' : '#eaeaea';

    return (
        <div className={themed('viewer-container')}>
            <ModelViewerComponent
                style={viewerStyle}
                background-color={viewerBackgroundColor}
                auto-rotate-delay={1000}
                auto-rotate
                camera-controls
                src={src}
            ></ModelViewerComponent>
        </div>
    );
};
