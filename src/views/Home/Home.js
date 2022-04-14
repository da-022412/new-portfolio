import Hero from '../../components/Hero';
import Portfolio from '../../components/Home/Portfolio';
import Clients from '../../components/Home/Clients';
import Skills from '../../components/Home/Skills';
import Contact from '../../components/Contact';

let CONTENT = {
    title: `Hi, I'm Dennis Front-End Developer`,
    subTitle: `<p>My goal is to create impactful user experiences that connect your customers with your brand. To do this, I combine my background in both design and front-end development to make the creation of your website both a seamless experience for you and an exciting one for your customers.</p><p>In short, your business deserves a great website, and I'm here to make that happen.</p><p>See how I've made it happen for many other brands.</p>`,
};

const Home = () => {
    return (
        <>
            <Hero title={CONTENT.title} subTitle={CONTENT.subTitle} />
            <Portfolio />
            <Clients />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;
