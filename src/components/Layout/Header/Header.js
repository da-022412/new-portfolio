import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../Nav';

import FlexContainer from '../../FlexContainer';

const Header = () => {
    return (
        <header>
            <FlexContainer padding={80}>
                <Logo>
                    <Link to='/'>Dennis Acosta</Link>
                </Logo>
                <Nav />
            </FlexContainer>
        </header>
    );
};

const Logo = styled.div`
    color: #000;
    font-family: var(--primary-font);
    font-size: 1.5rem;

    a {
        color: var(--color-text);
        text-decoration: none;
    }
`;

export default Header;
