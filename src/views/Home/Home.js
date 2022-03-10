import Hero from '../../components/Home/Hero';
import Portfolio from '../../components/Home/Portfolio';
import Divider from '../../components/Divider';
import Clients from '../../components/Home/Clients';
import Skills from '../../components/Home/Skills';
import Contact from '../../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Divider />
            <Portfolio />
            <Clients />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;
