import styled from 'styled-components';

import Nav from '../Nav';

import FlexContainer from '../../FlexContainer';

const Header = () => {
    return (
        <header>
            <FlexContainer padding={80}>
                <Logo>Dennis Acosta</Logo>
                <Nav />
            </FlexContainer>
        </header>
    );
};

const Logo = styled.div`
    color: #000;
    font-family: gtWalsheimProRegular, sans-serif;
    font-size: 1.5rem;
`;

export default Header;
