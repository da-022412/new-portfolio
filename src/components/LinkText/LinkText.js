import styled from 'styled-components';

const LinkText = ({ link, children, ...rest }) => {
    return (
        <Wrapper href={link} {...rest}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.a`
    color: var(--color-text);
    font-family: var(--primary-font);
    font-size: calc(var(--body-text) - 0.25rem);
    position: relative;
    text-decoration: none;

    &:after {
        background-color: var(--color-text);
        bottom: -8px;
        content: '';
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        width: 0;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;

export default LinkText;
