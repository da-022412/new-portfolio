import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './App.css';

// Components
import Header from './layout/Header';
import MobileHeader from './layout/MobileHeader';
import Footer from './layout/Footer';

import Home from './home/Home';

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

const links = [
    {
        id: 0,
        title: 'My work',
        slug: '#work',
    },
    {
        id: 1,
        title: 'Get in touch',
        slug: '#contact',
    },
];

const App = () => {
    const isBreakpoint = useMediaQuery(980);

    return (
        <Router>
            {isBreakpoint ? (
                <MobileHeader links={links} />
            ) : (
                <Header links={links} />
            )}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
