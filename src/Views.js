import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Views
import Home from './views/Home';
import Project from './views/Project';

const Views = () => {
    let [projects, setProjects] = useState('');

    useEffect(() => {
        async function projectLinks() {
            let projectsLink = await axios.get(
                'https://wordpress-741292-2528350.cloudwaysapps.com/wp-json/wp/v2/portfolio-items/?per_page=50'
            );

            Promise.all([projectsLink]).then((response) => {
                setProjects(response[0].data.slug);
            });
        }

        return projectLinks();
    }, []);

    let allProjects = [];

    projects &&
        projects.length > 0 &&
        projects.map((project) => allProjects.push({ slug: project.slug }));

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                exact
                path='/project/:slug'
                component={Project}
                changefreq='monthly'
                priority='1'
                slugs={allProjects}
            />
        </Routes>
    );
};

export default Views;
