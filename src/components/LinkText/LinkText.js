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
    font-size: var(--body-text);
    position: relative;
    text-decoration: none;

    &:after {
        background-color: var(--color-text);
        bottom: -4px;
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 0;
        transition: all 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;

export default LinkText;
