import { useState, useCallback, useEffect } from 'react';

import Header from './Header';
import MobileHeader from './MobileHeader';
import Footer from './Footer';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};

const Layout = ({ children }) => {
    const isBreakpoint = useMediaQuery(980);

    return (
        <>
            {isBreakpoint ? <MobileHeader /> : <Header />}
            <>{children}</>
            <Footer />
        </>
    );
};

export default Layout;
