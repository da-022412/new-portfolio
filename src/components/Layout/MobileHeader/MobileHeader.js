import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { toEm } from '../../../utils';

const MobileHeader = () => {
    return (
        <Wrapper>
            <Logo>
                <Link to='/'>DA</Link>
            </Logo>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    margin: auto;
    max-width: 90%;
    padding: ${toEm(24)} 0;
`;

const Logo = styled.div`
    color: #000;
    font-family: var(--primary-font);
    font-size: ${toEm(24)};

    a {
        color: var(--color-text);
        text-decoration: none;
    }
`;

export default MobileHeader;
