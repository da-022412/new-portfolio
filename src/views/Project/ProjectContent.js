import styled from 'styled-components';

import { toEm } from '../../utils';

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

    p {
        margin-bottom: ${toEm(28)};
    }
`;

export default ProjectContent;
