import styled from 'styled-components';

import { toEm } from '../../utils.js';

import Container from '../Container';

const FlexContainer = ({ padding, children, ...rest }) => {
    return (
        <Wrapper padding={padding} {...rest}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled(Container)`
    align-items: center;
    display: flex;
    gap: ${toEm(80)};
    justify-content: space-between;

    @media (max-width: 980px) {
        flex-wrap: wrap;
    }
`;

export default FlexContainer;
