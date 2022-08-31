import styled from 'styled-components';

import Container from '../../../Container';
import Divider from '../../../Divider';
import Social from './Social';
import BodyText from '../../../BodyText';

import gitHub from '../../../../assets/images/github-icon-white.svg';
import linkedIn from '../../../../assets/images/linkedin-icon-white.svg';
import dribbble from '../../../../assets/images/dribbble-icon-white.svg';

const CONTENT = [
    {
        img: gitHub,
        alt: 'GitHub',
        height: 32,
        width: 32,
        link: 'https://github.com/da-022412',
    },
    {
        img: linkedIn,
        alt: 'LinkedIn',
        height: 32,
        width: 37,
        link: 'https://www.linkedin.com/in/dennis-acosta-70510119a/',
    },
];

const SubFooter = () => {
    return (
        <Container padding={32}>
            <Divider />
            <FlexWrapper>
                <Social items={CONTENT} />
                <BodyText>&copy;2022 Dennis Acosta</BodyText>
            </FlexWrapper>
        </Container>
    );
};

const FlexWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export default SubFooter;
