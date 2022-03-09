import styled from 'styled-components';

import { toRem } from '../../../utils.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

const SkillSlider = ({ items }) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={4000}
            freeModeMomentum={false}
            allowTouchMove={false}
            modules={[Autoplay]}
        >
            {items.map(({ skill }, index) => (
                <SwiperSlide key={index}>
                    <Wrapper>{skill}</Wrapper>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const Wrapper = styled.div`
    font-size: ${toRem(60)};
    font-family: var(--primary-font);
    position: relative;
    text-align: center;
    white-space: nowrap;

    :after {
        content: '/';
        left: 100%;
        position: absolute;
    }
`;

export default SkillSlider;
