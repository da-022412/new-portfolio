import styled from 'styled-components';

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
        font-family: var(--primary-font);
        font-size: var(--body-text);
        text-decoration: none;
    }
`;

export default Nav;
