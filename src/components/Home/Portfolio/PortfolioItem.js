import styled from 'styled-components';
import { motion } from 'framer-motion';

import { toEm } from '../../../utils.js';

import FlexContainer from '../../FlexContainer';
import Heading from '../../Heading';
import BodyText from '../../BodyText';
import LinkText from '../../LinkText';
import FeaturedImg from './FeaturedImg';
import Divider from '../../Divider';

const PortfolioItem = ({ title, excerpt, featuredImg, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, default: { duration: 1.5 } }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <Wrapper padding={40}>
                <Column>
                    <StyledHeading level={3}>{title}</StyledHeading>
                    <StyledText>{excerpt}</StyledText>
                    <LinkText link={link} target='_blank'>
                        View Project
                    </LinkText>
                </Column>
                <Column>
                    <FeaturedImg featuredImg={featuredImg} />
                </Column>
            </Wrapper>
            <Divider />
        </motion.div>
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
    max-width: 100%;

    @media (max-width: 980px) {
        flex-direction: column-reverse;
        gap: 0;
        padding: ${toEm(16)} 0;
    }
`;

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
`;

const StyledText = styled(BodyText)`
    padding-bottom: ${toEm(48)};

    @media (max-width: 980px) {
        padding-bottom: 0;
    }
`;

export default PortfolioItem;
