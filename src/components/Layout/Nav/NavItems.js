import styled from 'styled-components';

import { HashLink as Link } from 'react-router-hash-link';

import { btnStyles } from '../../../utils';

const NavItems = ({ items }) => {
    return items.map(({ slug, text }, index) => (
        <Link to={slug} key={index}>
            <Wrapper>{text}</Wrapper>
        </Link>
    ));
};

const Wrapper = styled.div(btnStyles);

export default NavItems;
