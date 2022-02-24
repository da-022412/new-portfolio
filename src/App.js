import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { toRem } from './utils.js';

import Layout from './components/Layout';

// Views
import Home from './views/Home';

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
