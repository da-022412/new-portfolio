import styled from 'styled-components';

import { toEm } from '../../utils';

const Image = ({ src, alt }) => {
    return (
        <Wrapper>
            <StyledImg src={src} alt={alt} />
        </Wrapper>
    );
};

const Wrapper = styled.figure`
    box-sizing: border-box;
    display: block;
    padding: ${toEm(16)} 0;
    width: 100%;
`;

const StyledImg = styled.img`
    height: auto;
    max-width: 100%;
    width: 100%;
`;

export default Image;
