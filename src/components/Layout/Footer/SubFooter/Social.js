import styled from 'styled-components';

import Image from '../../../Image';

const Social = ({ items }) => {
    return (
        <Wrapper>
            {items.map(({ img, height, width, alt, link }, index) => (
                <a href={link} target='_blank' key={index}>
                    <Image src={img} height={height} width={width} alt={alt} />
                </a>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
`;

export default Social;
