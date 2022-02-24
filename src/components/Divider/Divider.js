import styled from 'styled-components';

import Container from '../Container';

const Divider = () => {
    return (
        <Container padding={48}>
            <Seperator></Seperator>
        </Container>
    );
};

const Seperator = styled.div`
    background-color: #f7f7f7;
    height: 2px;
`;

export default Divider;
