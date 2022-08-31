import styled from 'styled-components';

import Image from '../../../Image';

const Social = ({ items }) => {
    return (
        <Wrapper>
            {items.map(({ img, height, width, alt, link }, index) => (
                <a href={link} target='_blank'>
                    <Image
                        src={img}
                        height={height}
                        width={width}
                        alt={alt}
                        key={index}
                    />
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
