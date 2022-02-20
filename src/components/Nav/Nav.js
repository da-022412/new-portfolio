import styled from '@emotion/styled';

const NavContainer = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: auto;
    padding: 5rem 0;
`;

const MenuItem = styled.li`
    margin-left: 5rem;

    &:first-of-type {
        margin: 0;
    }

    & a {
        color: inherit;
        font-family: gtWalsheimProRegular, sans-serif;
        font-size: 1rem;
        text-decoration: none;
    }
`;

const Nav = ({ links }) => {
    return (
        <nav>
            <NavContainer>
                {links.map((x) => (
                    <MenuItem key={x.id}>
                        <a href={x.slug}>{x.title}</a>
                    </MenuItem>
                ))}
            </NavContainer>
        </nav>
    );
};

export default Nav;
