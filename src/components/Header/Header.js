import styled from '@emotion/styled';

import Nav from '../Nav';

const HeaderContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 90%;
    padding: 5rem 0;
    width: 1200px;
`;

const Logo = styled.div`
    color: #000;
    font-family: gtWalsheimProRegular, sans-serif;
    font-size: 1.5rem;
`;

const Header = ({ links }) => {
    return (
        <header>
            <HeaderContainer>
                <Logo>Dennis Acosta</Logo>
                <Nav links={links} />
            </HeaderContainer>
        </header>
    );
};

export default Header;
