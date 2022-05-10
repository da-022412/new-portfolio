import { HashLink as Link } from 'react-router-hash-link';

import LinkText from '../../LinkText';

const NavItems = ({ items }) => {
    return items.map(({ slug, text }, index) => (
        <Link to={slug} key={index}>
            <LinkText>{text}</LinkText>
        </Link>
    ));
};

export default NavItems;
