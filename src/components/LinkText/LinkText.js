import styled from 'styled-components';

import { btnStyles } from '../../utils';

const LinkText = ({ link, children, ...rest }) => {
    return (
        <Wrapper href={link} {...rest}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.a(btnStyles);

export default LinkText;
