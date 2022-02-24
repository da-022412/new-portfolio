import styled from 'styled-components';

const StyledHeading = styled.h1`
    font-family: var(--primary-font);
    font-size: var(--heading-1);
    color: #000;
`;

const Heading = ({ level, ...rest }) => {
    return <StyledHeading as={`h${level}`} {...rest} />;
};

Heading.defaultProps = {
    level: 1,
};

export default Heading;
