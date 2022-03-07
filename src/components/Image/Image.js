import styled from 'styled-components';

const Image = ({ src, height, width, alt }) => {
    return (
        <figure>
            <StyledImg src={src} height={height} width={width} alt={alt} />
        </figure>
    );
};

const StyledImg = styled.img`
    height: auto;
    max-width: 100%;
    width: 100%;
`;

export default Image;
