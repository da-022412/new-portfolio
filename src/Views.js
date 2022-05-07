import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Views
import Home from './views/Home';
import Project from './views/Project';

const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project/:slug' element={<Project />} />
            {/*<Route path='*' element={<404 />} />*/}
        </Routes>
    );
};

export default Views;
