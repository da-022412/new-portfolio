import styled from 'styled-components';

const toRem = (size, base = 16) => size / base + 'rem';

const Container = ({ padding, className, children }) => {
    return (
        <Wrapper padding={padding} className={className}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    box-sizing: border-box;
    margin: auto;
    max-width: 90%;
    padding: ${(props) => (props.padding ? toRem(props.padding) + ' 0' : null)};
    width: var(--site-width);
`;

export default Container;
