import FlexContainer from '../FlexContainer';

import ContactInfo from './ContactInfo';
import Form from './Form';

const CONTENT = {
    heading: 'Get in Touch',
    copy: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud',
};

const Contact = () => {
    return (
        <FlexContainer>
            <ContactInfo content={CONTENT} />
            <Form />
        </FlexContainer>
    );
};

export default Contact;
