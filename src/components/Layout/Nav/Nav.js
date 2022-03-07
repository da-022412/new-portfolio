import styled from 'styled-components';

import FlexContainer from '../../FlexContainer';
import NavItems from './NavItems';

const CONTENT = [
    {
        id: 0,
        text: 'My work',
        slug: '#work',
    },
    {
        id: 1,
        text: 'Get in touch',
        slug: '#contact',
    },
];

const Nav = () => {
    return (
        <nav>
            <NavContainer>
                <NavItems items={CONTENT} />
            </NavContainer>
        </nav>
    );
};

const NavContainer = styled(FlexContainer)`
    gap: 2.5rem;
    max-width: none;
    width: auto;
`;

export default Nav;
