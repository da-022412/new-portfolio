import styled from 'styled-components';

import { toEm } from '../../utils';

const Image = ({ src, alt, width, height }) => {
    return (
        <Wrapper>
            <StyledImg src={src} alt={alt} width={width} height={height} />
        </Wrapper>
    );
};

const Wrapper = styled.figure`
    display: block;
    padding: ${toEm(16)} 0;
`;

const StyledImg = styled.img`
    height: auto;
    max-width: 100%;
`;

export default Image;
