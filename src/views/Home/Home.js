import { useState, useEffect } from 'react';
import axios from 'axios';

import { HOME_API_URL } from '../../utils';

import Spinning from '../../components/Spinning';
import Hero from '../../components/Hero';
import Portfolio from '../../components/Home/Portfolio';
import Clients from '../../components/Home/Clients';
import Skills from '../../components/Home/Skills';
import Contact from '../../components/Contact';

const Home = () => {
    const [content, setContent] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getContent() {
            await axios.get(`${HOME_API_URL}`).then((response) => {
                setContent(response.data);
                setLoading(false);
            });
        }

        return getContent();
    }, []);

    console.log(content);

    return (
        <>
            {loading ? (
                <Spinning />
            ) : (
                <Hero
                    title={content.acf.title}
                    subTitle={content.content.rendered}
                />
            )}
            <Portfolio />
            <Clients />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;
