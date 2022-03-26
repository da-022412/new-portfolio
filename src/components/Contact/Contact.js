import styled from 'styled-components';

import FlexContainer from '../FlexContainer';

import ContactInfo from './ContactInfo';
import Form from './Form';

const CONTENT = {
    heading: 'Get in Touch',
    copy: 'Ready to take your online presence to the next level?',
};

const Contact = () => {
    return (
        <StyledContainer padding={60}>
            <ContactInfo content={CONTENT} />
            <Form />
        </StyledContainer>
    );
};

const StyledContainer = styled(FlexContainer)`
    align-items: flex-start;
`;

export default Contact;
