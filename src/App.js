import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { toRem } from './utils.js';

import Layout from './components/Layout';
import Views from './Views';

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Router>
            <Layout>
                <GlobalStyles
                    invert={scrollPosition >= 600 ? 'invert' : null}
                />
                <Views />
            </Layout>
        </Router>
    );
};

const GlobalStyles = createGlobalStyle`
    :root {
        --background: ${(props) => (props.invert ? '#000' : '#fff')};
        --body-text: ${toRem(20)};
        --color-accent: #686868;
        --color-text: ${(props) => (props.invert ? '#fff' : '#000')};
        --heading-1: ${toRem(60)};
        --heading-2: ${toRem(48)};
        --heading-3: ${toRem(36)};
        --heading-4: ${toRem(28)};
        --primary-font: gtWalsheimProRegular, sans-serif;
        --site-width: 1200px;
    }

    @media (max-width:767px) {
        :root {
            --heading-1: ${toRem(36)};
            --heading-2: ${toRem(28)};
            --heading-3: ${toRem(20)};
            --heading-4: ${toRem(18)};
        }
    }
`;

export default App;
