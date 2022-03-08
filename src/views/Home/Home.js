import Hero from '../../components/Home/Hero';
import Portfolio from '../../components/Home/Portfolio';
import Divider from '../../components/Divider';
import Clients from '../../components/Home/Clients';
import Skills from '../../components/Home/Skills';

const Home = () => {
    return (
        <>
            <Hero />
            <Divider />
            <Portfolio />
            <Clients />
            <Skills />
        </>
    );
};

export default Home;
