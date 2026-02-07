import { useEffect } from 'react';

const useScrollWithId = () => {
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash) {
                const elementId = window.location.hash.substring(1); // Remove the #
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Call handleHashChange when the page loads
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
};

export default useScrollWithId;
