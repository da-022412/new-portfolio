import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import { PROJECTS_API_URL } from './utils';

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
