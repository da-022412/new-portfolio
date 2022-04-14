import styled from 'styled-components';

import { toEm } from '../../../utils.js';

import FlexContainer from '../../FlexContainer';
import Heading from '../../Heading';
import BodyText from '../../BodyText';
import LinkText from '../../LinkText';
import FeaturedImg from './FeaturedImg';
import Divider from '../../Divider';

const PortfolioItem = ({ title, excerpt, featuredImg, link }) => {
    return (
        <>
            <Wrapper padding={40}>
                <Column>
                    <StyledHeading level={3}>{title}</StyledHeading>
                    <StyledText>{excerpt}</StyledText>
                    <LinkText link={'projects/' + link} target='_blank'>
                        View Project
                    </LinkText>
                </Column>
                <FeaturedImg featuredImg={featuredImg} />
            </Wrapper>
            <Divider />
        </>
    );
};

const Column = styled.div`
    box-sizing: border-box;
    width: 50%;

    @media (max-width: 980px) {
        width: 100%;
    }
`;

const Wrapper = styled(FlexContainer)`
    max-width: none;

    @media (max-width: 980px) {
        flex-direction: column;
        max-width: 90%;
    }
`;

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
`;

const StyledText = styled(BodyText)`
    padding-bottom: ${toEm(48)};
`;

export default PortfolioItem;
