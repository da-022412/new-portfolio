import styled from 'styled-components';

import FlexContainer from '../FlexContainer';
import Heading from '../Heading';
import BodyText from '../BodyText';
import LinkText from '../LinkText';

const PortfolioItem = ({ title, copy, img, link }) => {
    return (
        <Wrapper padding={40}>
            <div>
                <StyledHeading level={3}>{title}</StyledHeading>
                <BodyText>{copy}</BodyText>
                <LinkText link={link}>View Project</LinkText>
            </div>
            <figure>
                <img src={img} height='600' width='600' />
            </figure>
        </Wrapper>
    );
};

const Wrapper = styled(FlexContainer)`
    max-width: none;
`;

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
`;

export default PortfolioItem;
