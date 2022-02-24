import styled from 'styled-components';

import { toRem } from '../../utils.js';

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
    padding: ${(props) => (props.padding ? toRem(props.padding) + ' 0' : null)};
    width: var(--site-width);
`;

export default Container;
