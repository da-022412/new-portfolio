import styled from 'styled-components';

const Heading = ({ level, children }) => {
    const tag = `h${level}`;
    return <Wrapper as={tag}>{children}</Wrapper>;
};

const Wrapper = styled.text`
    font-family: var(--primary-font);
    font-size: ${(props) =>
        props.level === 1
            ? 'var(--heading-1)'
            : (props) =>
                  props.level === 2
                      ? 'var(--heading-2)'
                      : (props) =>
                            props.level === 3
                                ? 'var(--heading-3)'
                                : (props) =>
                                      props.level === 4
                                          ? 'var(--heading-4)'
                                          : null};
`;

export default Heading;
