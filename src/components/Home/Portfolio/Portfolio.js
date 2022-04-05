import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PROJECTS_API_URL } from '../../../utils';

import Container from '../../Container';
import Heading from '../../Heading';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        async function getProjects() {
            await axios.get(`${PROJECTS_API_URL}`).then((response) => {
                setProjects(response.data);
            });
        }

        return getProjects();
    }, []);

    console.log(projects);

    return (
        <Container padding={100}>
            <StyledHeading level={3}>My Work</StyledHeading>
            {projects.map((project, index) => (
                <PortfolioItem
                    key={index}
                    title={project.title.rendered}
                    excerpt={project.excerpt.rendered}
                    featuredImg={project.featured_media}
                    link={project.slug}
                />
            ))}
        </Container>
    );
};

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
    text-align: center;
`;

export default Portfolio;
