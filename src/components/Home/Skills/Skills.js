import styled from 'styled-components';

import Container from '../../Container';
import SkillSlider from './SkillSlider';

const CONTENT = [
    {
        skill: 'ReactJS',
    },
    {
        skill: 'JavaScript',
    },
    {
        skill: 'HTML',
    },
    {
        skill: 'CSS',
    },
    {
        skill: 'SASS',
    },
    {
        skill: 'NextJS',
    },
    {
        skill: 'JSX',
    },
];

const Skills = () => {
    return (
        <StyledContainer padding={300}>
            <SkillSlider items={CONTENT} />
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    max-width: none;
    width: 100%;
`;

export default Skills;
