import styled from 'styled-components';

const BodyText = ({ children, ...rest }) => {
    return (
        <Wrapper
            dangerouslySetInnerHTML={{ __html: children }}
            {...rest}
        ></Wrapper>
    );
};

const Wrapper = styled.p`
    color: var(--color-text);
    font-family: var(--primary-font);
    font-size: var(--body-text);
`;

export default BodyText;
