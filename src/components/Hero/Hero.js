import styled from 'styled-components';

import { toEm } from '../../utils';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';
import Divider from '../Divider';

const Home = ({ title, subTitle }) => {
    return (
        <Container padding={48}>
            <Heading>{title}</Heading>
            <SubHeading>{subTitle}</SubHeading>
            <Divider />
        </Container>
    );
};

const SubHeading = styled(BodyText)`
    padding-bottom: ${toEm(20)};
    width: 75%;

    @media (max-width: 980px) {
        width: 100%;
    }
`;

export default Home;
