import styled from 'styled-components';

import { toRem } from '../../../utils';

import Container from '../../Container';
import Heading from '../../Heading';
import BodyText from '../../BodyText';

const Home = () => {
    return (
        <Container padding={48}>
            <Heading>I'm Dennis, Front-End Developer</Heading>
            <SubHeading>
                My goal is to create impactful user experiences that connect
                your customers with your brand. To do this, I combine my
                background in both design and front-end development to make the
                creation of your website both a seamless experience for you and
                an exciting one for your customers. ‍
            </SubHeading>
            <SubHeading>
                In short, your business deserves a great website, and I'm here
                to make that happen.
            </SubHeading>
            <SubHeading>
                See how I've made it happen for many other brands.
            </SubHeading>
        </Container>
    );
};

const SubHeading = styled(BodyText)`
    padding-bottom: ${toRem(20)};
    width: 75%;

    @media (max-width: 980px) {
        width: 100%;
    }
`;

export default Home;
