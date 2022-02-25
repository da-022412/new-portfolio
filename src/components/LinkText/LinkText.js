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
        background-color: #000;
        bottom: -4px;
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 100%;
        transition: height 0.3s ease;
        z-index: -1;
    }

    &:hover {
        color: #fff;
    }

    &:hover:after {
        height: calc(100% + 4px);
    }
`;

export default LinkText;
