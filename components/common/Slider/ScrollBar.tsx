import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useScrollPosition = () => {
    const [scrollPosition, setscrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setscrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};
