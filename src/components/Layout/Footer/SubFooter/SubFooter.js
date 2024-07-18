import styled from 'styled-components';

import Container from '../../../Container';
import Divider from '../../../Divider';
import Social from './Social';

import gitHub from '../../../../assets/images/github-icon-white.svg';
import linkedIn from '../../../../assets/images/linkedin-icon-white.svg';

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
        link: 'https://www.linkedin.com/in/dennis-acosta/',
    },
];

const SubFooter = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Container padding={32}>
            <Divider />
            <FlexWrapper>
                <Social items={CONTENT} />
                <p>&copy; {year} Dennis Acosta</p>
            </FlexWrapper>
        </Container>
    );
};

const FlexWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;

    p {
        color: var(--color-text);
        font-family: var(--primary-font);
        font-size: var(--body-text);
    }
`;

export default SubFooter;
