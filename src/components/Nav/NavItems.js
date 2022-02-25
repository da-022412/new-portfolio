import LinkText from '../LinkText';

const NavItems = ({ items }) => {
    return items.map(({ slug, text }, index) => (
        <LinkText link={slug} key={index}>
            {text}
        </LinkText>
    ));
};

export default NavItems;
