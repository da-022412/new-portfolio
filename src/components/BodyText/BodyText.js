import styled from 'styled-components';

import { toEm } from '../../utils';

const BodyText = ({ children, ...rest }) => {
    return <Wrapper dangerouslySetInnerHTML={{ __html: children }} {...rest} />;
};

const Wrapper = styled.div`
    color: var(--color-text);
    font-family: var(--primary-font);
    font-size: var(--body-text);

    & p {
        padding-bottom: ${toEm(32)};
    }
`;

export default BodyText;
