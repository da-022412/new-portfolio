import { useState, useEffect } from 'react';
import axios from 'axios';

import { PROJECTS_API_URL } from '../../utils';

import Container from '../../components/Container';
import Spinning from '../../components/Spinning';
import Hero from '../../components/Hero';
import ProjectContent from './ProjectContent';

const Project = ({ match }) => {
    const [meta, setMeta] = useState({
        title: '',
        excerpt: '',
    });
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    const { title, excerpt } = meta;

    useEffect(() => {
        async function getProjects() {
            const projectItem = axios.get(`${PROJECTS_API_URL}`);

            Promise.all([projectItem]).then((response) => {
                response[0].data.forEach((item) => {
                    if (item.slug === match.params.slug) {
                        setMeta({
                            title: item.title.rendered,
                            excerpt: item.excerpt,
                        });
                        setContent(item.content.rendered);
                    }
                });

                setLoading(false);
            });
        }

        getProjects();
    }, [match.params.slug]);

    return (
        <Container padding={100}>
            {loading ? (
                <Spinning />
            ) : (
                <>
                    <Hero title={title} subTitle={excerpt} />
                    <ProjectContent content={content} />
                </>
            )}
        </Container>
    );
};

export default Project;
