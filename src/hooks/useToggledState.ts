import { useState } from 'react';

type Toggler = () => void;

export const useToggledState = (initialValue: boolean): [boolean, Toggler] => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = (): void => {
        setValue(!value);
    }

    return [value, toggleValue];
}