import styled from 'styled-components';

import { toEm } from '../../utils.js';

const Heading = ({ level, ...rest }) => {
    return <StyledHeading as={`h${level}`} {...rest} />;
};

const StyledHeading = styled.h1`
    color: var(--color-text);
    font-family: var(--primary-font);
    font-size: var(--heading-1);
    padding-bottom: ${toEm(28)};
`;

Heading.defaultProps = {
    level: 1,
};

export default Heading;
