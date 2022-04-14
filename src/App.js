import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { toEm } from './utils.js';

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
        --body-text: ${toEm(20)};
        --color-accent: #686868;
        --color-text: ${(props) => (props.invert ? '#fff' : '#000')};
        --heading-1: ${toEm(60)};
        --heading-2: ${toEm(48)};
        --heading-3: ${toEm(36)};
        --heading-4: ${toEm(28)};
        --primary-font: gtwalsheimproregular, sans-serif;
        --site-width: 1200px;
    }

    @media (max-width:767px) {
        :root {
            --heading-1: ${toEm(36)};
            --heading-2: ${toEm(28)};
            --heading-3: ${toEm(20)};
            --heading-4: ${toEm(18)};
        }
    }
`;

export default App;
