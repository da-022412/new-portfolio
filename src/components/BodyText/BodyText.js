import styled from 'styled-components';

const BodyText = ({ className, children }) => {
    return (
        <Wrapper
            className={className}
            dangerouslySetInnerHTML={{ __html: children }}
        ></Wrapper>
    );
};

const Wrapper = styled.p`
    font-family: var(--primary-font);
    font-size: var(--body-text);
`;

export default BodyText;
