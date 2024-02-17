import {useEffect, useRef, useState} from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debounceTimeoutRef.current !== null) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            if (debounceTimeoutRef.current !== null) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, [value, delay]);

    return debouncedValue;
};
