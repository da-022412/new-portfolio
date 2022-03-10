import styled from 'styled-components';

import { toRem } from '../../utils.js';

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
    gap: ${toRem(80)};
    justify-content: space-between;
`;

export default FlexContainer;
