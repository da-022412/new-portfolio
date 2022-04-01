import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { toRem } from './utils.js';

// CSS reset
import './reset.css';

import Layout from './components/Layout';

// Views
import Home from './views/Home';

const GlobalStyles = createGlobalStyle`
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

    @media (max-width:767px) {
        :root {
            --heading-1: ${toRem(36)};
            --heading-2: ${toRem(28)};
            --heading-3: ${toRem(20)};
            --heading-4: ${toRem(18)};
        }
    }
`;

const App = () => {
    return (
        <Router>
            <Layout>
                <GlobalStyles />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
