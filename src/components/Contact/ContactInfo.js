import styled from 'styled-components';

import Heading from '../Heading';
import BodyText from '../BodyText';

const ContactInfo = ({ content }) => {
    return (
        <Wrapper>
            <StyledHeading level='2'>{content.heading}</StyledHeading>
            <BodyText>{content.copy}</BodyText>
        </Wrapper>
    );
};

const StyledHeading = styled(Heading)`
    font-size: var(--heading-2);
`;

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 50%;

    @media (max-width: 980px) {
        width: 100%;
    }
`;

export default ContactInfo;
