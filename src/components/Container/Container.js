import styled from 'styled-components';

import { toEm } from '../../utils.js';

const Container = ({ padding, children, ...rest }) => {
    return (
        <Wrapper padding={padding} {...rest}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    box-sizing: border-box;
    margin: auto;
    max-width: 90%;
    padding: ${(props) => (props.padding ? toEm(props.padding) + ' 0' : null)};
    width: var(--site-width);

    @media (max-width: 980px) {
        padding: ${(props) =>
            props.padding ? toEm(props.padding / 2) + ' 0' : null};
    }
`;

export default Container;
