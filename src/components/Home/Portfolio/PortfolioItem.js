import styled from 'styled-components';

import { toRem } from '../../../utils.js';

import FlexContainer from '../../FlexContainer';
import Heading from '../../Heading';
import BodyText from '../../BodyText';
import LinkText from '../../LinkText';
import Image from '../../Image';

const PortfolioItem = ({ title, copy, img, link }) => {
    return (
        <Wrapper padding={40}>
            <Column>
                <StyledHeading level={3}>{title}</StyledHeading>
                <StyledText>{copy}</StyledText>
                <LinkText link={link} target='_blank'>
                    View Project
                </LinkText>
            </Column>
            <Image
                src={img.src}
                height={img.height}
                width={img.width}
                alt={img.alt}
            />
        </Wrapper>
    );
};

const Column = styled.div`
    box-sizing: border-box;
    width: 50%;
`;

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
