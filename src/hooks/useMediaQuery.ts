import { useLayoutEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery: string): boolean => {
    const initialValue: boolean = window.matchMedia(mediaQuery).matches;
    const [matches, setMatches] = useState<boolean>(initialValue);

    useLayoutEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery);
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQueryList.addListener(listener);

        return () => mediaQueryList.removeListener(listener);
    }, [mediaQuery]);

    return matches;
}

