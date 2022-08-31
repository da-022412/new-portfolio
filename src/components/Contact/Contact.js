import styled from 'styled-components';
import { motion } from 'framer-motion';

import FlexContainer from '../FlexContainer';

import ContactInfo from './ContactInfo';
import Form from './Form';

const CONTENT = {
    heading: 'Get in Touch',
    copy: 'Ready to take your online presence to the next level?',
};

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.125, default: { duration: 1.5 } }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <StyledContainer padding={60}>
                <ContactInfo content={CONTENT} />
                <Form />
            </StyledContainer>
        </motion.div>
    );
};

const StyledContainer = styled(FlexContainer)`
    align-items: flex-start;
`;

export default Contact;
