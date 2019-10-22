import { useEffect } from 'react';

export type KeyboardEventCallback = {
    [key: string]: (e: KeyboardEvent) => void;
};

export const useKeyboardEvent = (eventCallbacks: KeyboardEventCallback) => {
    useEffect(() => {
        const handler = (e: KeyboardEvent): void => {
            if (eventCallbacks[e.key]) {
                eventCallbacks[e.key](e);
            }
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [eventCallbacks]);
};
