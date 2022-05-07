import styled from 'styled-components';

import Container from '../../components/Container';

const ProjectContent = ({ content }) => {
    return (
        <Container padding={100}>
            <Wrapper dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
    );
};

const Wrapper = styled.div`
    color: var(--color-text);
    font-family: var(--primary-font);
    font-size: var(--body-text);
`;

export default ProjectContent;
