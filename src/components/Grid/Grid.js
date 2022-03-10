import styled from 'styled-components';

import { toRem } from '../../utils.js';

const Grid = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
    align-items: center;
    display: grid;
    gap: ${toRem(80)};
    grid-template-columns: repeat(
        auto-fit,
        minmax(${(props) => props.width + 'px'}, 1fr)
    );
`;

export default Grid;
