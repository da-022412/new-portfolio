import styled from 'styled-components';

import Container from '../../Container';
import SkillSlider from './SkillSlider';

const CONTENT = [
    {
        skill: 'ReactJS',
    },
    {
        skill: 'HTML',
    },
    {
        skill: 'CSS',
    },
    {
        skill: 'JavaScript',
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
    {
        skill: 'Wordpress',
    },
];

const Skills = () => {
    return (
        <StyledContainer padding={200}>
            <SkillSlider items={CONTENT} />
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    max-width: none;
    width: 100%;
`;

export default Skills;
