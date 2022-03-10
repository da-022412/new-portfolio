import styled from 'styled-components';

import FlexContainer from '../FlexContainer';

import ContactInfo from './ContactInfo';
import Form from './Form';

const CONTENT = {
    heading: 'Get in Touch',
    copy: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud',
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
