import styled from 'styled-components';

import { toRem } from '../../utils.js';

const Heading = ({ level, ...rest }) => {
    return <StyledHeading as={`h${level}`} {...rest} />;
};

const StyledHeading = styled.h1`
    font-family: var(--primary-font);
    font-size: var(--heading-1);
    padding-bottom: ${toRem(28)};
`;

Heading.defaultProps = {
    level: 1,
};

export default Heading;
