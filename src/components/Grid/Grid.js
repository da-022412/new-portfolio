import styled from 'styled-components';

import { toEm } from '../../utils.js';

const Grid = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
    align-items: center;
    display: grid;
    gap: ${toEm(80)};
    grid-template-columns: repeat(
        auto-fit,
        minmax(${(props) => props.width + 'px'}, 1fr)
    );

    @media (max-width: 980px) {
        gap: ${toEm(32)};
        grid-template-columns: repeat(
            auto-fit,
            minmax(${(props) => props.width / 2 + 'px'}, 1fr)
        );
    }
`;

export default Grid;
