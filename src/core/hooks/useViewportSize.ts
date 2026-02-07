import React, { useState, useEffect } from 'react';

export function useViewportHeight() {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateHeight = () => setHeight(window.innerHeight);
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return height;
}

export function useViewportWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return width;
}
