import styled from 'styled-components';

import Container from '../Container';
import BodyText from '../BodyText';

const Home = () => {
    return (
        <Container padding={48}>
            <Heading>I'm Dennis, Front-End Developer</Heading>
            <SubHeading>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
                ad minim veniam quis nostrud
            </SubHeading>
        </Container>
    );
};

const Heading = styled.h1`
    font-family: var(--primary-font);
    font-size: var(--heading-1);
`;

const SubHeading = styled(BodyText)`
    width: 50%;
`;

export default Home;
