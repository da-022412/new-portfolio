import styled from 'styled-components';

import { toRem } from '../../../utils.js';

import FlexContainer from '../../FlexContainer';
import Heading from '../../Heading';
import BodyText from '../../BodyText';
import LinkText from '../../LinkText';

const PortfolioItem = ({ title, copy, img, link }) => {
    return (
        <Wrapper padding={40}>
            <div>
                <StyledHeading level={3}>{title}</StyledHeading>
                <StyledText>{copy}</StyledText>
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

const StyledText = styled(BodyText)`
    padding-bottom: ${toRem(48)};
`;

export default PortfolioItem;
