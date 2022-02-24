import styled from 'styled-components';

import Container from '../Container';

const FlexContainer = ({ padding, children }) => {
    return <Wrapper padding={padding}>{children}</Wrapper>;
};

const Wrapper = styled(Container)`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export default FlexContainer;
