import styled from 'styled-components';

const ContactInfo = ({ content }) => {
    return (
        <Wrapper>
            <Heading level='2'>{content.heading}</Heading>
            <BodyText>{content.copy}</BodyText>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 50%;
`;

export default ContactInfo;
