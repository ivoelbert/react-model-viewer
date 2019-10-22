import { useState, useEffect } from 'react';

// Our hook
export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler: NodeJS.Timeout = setTimeout(() => {
            // YES! This is weird, but chrome seems to hate this setState inside a setTimeout
            // It causes a violation (>50ms handler).
            // It works just fine if we move over to a microtask.
            Promise.resolve(value).then(setDebouncedValue);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
