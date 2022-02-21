import styled from '@emotion/styled';

const toRem = (size, base = 16) => size / base + 'rem';

const Container = ({ padding, children }) => {
    return <Wrapper padding={padding ? padding : 0}>{children}</Wrapper>;
};

const Wrapper = styled.section`
    box-sizing: border-box;
    margin: auto;
    max-width: 90%;
    padding: ${(props) => toRem(props.padding)} 0;
    width: var(--site-width);
`;

export default Container;
