import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

// Components
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';

import Home from './views/Home';

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

const toRem = (size, base = 16) => size / base + 'rem';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'gtWalsheimProRegular';
        font-weight: 400;
        src: url('./assets/fonts/GTWalsheimProRegular.ttf') format('truetype');
    }

    html,
    body {
        margin: 0;
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        padding: 0;
        scroll-behavior: smooth;
    }

    :root {
        --body-text: ${toRem(20)};
        --color-accent: #686868;
        --color-text: #000;
        --heading-1: ${toRem(60)};
        --heading-2: ${toRem(48)};
        --heading-3: ${toRem(36)};
        --heading-4: ${toRem(28)};
        --primary-font: gtWalsheimProRegular, sans-serif;
        --site-width: 1200px;
    }
`;

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
            <GlobalStyles />
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
