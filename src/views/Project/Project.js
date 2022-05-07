import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { PROJECTS_API_URL } from '../../utils';

import Spinning from '../../components/Spinning';
import Hero from '../../components/Hero';
import ProjectContent from './ProjectContent';

const Project = () => {
    const params = useParams();
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
                    if (item.slug === params.slug) {
                        setMeta({
                            title: item.title.rendered,
                            excerpt: item.excerpt.rendered,
                        });
                        setContent(item.content.rendered);
                    }
                });

                setLoading(false);
            });
        }

        getProjects();
    }, [params.slug]);

    return (
        <>
            {loading ? (
                <Spinning />
            ) : (
                <>
                    <Hero title={title} subTitle={excerpt} />
                    <ProjectContent content={content} />
                </>
            )}
        </>
    );
};

export default Project;
