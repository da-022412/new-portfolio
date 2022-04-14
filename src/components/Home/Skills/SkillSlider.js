import styled from 'styled-components';

import { toEm } from '../../../utils.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';

const SkillSlider = ({ items }) => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={4000}
            allowTouchMove={false}
            modules={[Autoplay]}
            breakpoints={{
                300: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                981: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
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
    color: var(--color-text);
    font-size: ${toEm(60)};
    font-family: var(--primary-font);
    position: relative;
    text-align: center;
    white-space: nowrap;

    ::after {
        content: '/';
        left: 100%;
        position: absolute;
    }

    @media (max-width: 980px) {
        font-size: ${toEm(24)};
    }
`;

export default SkillSlider;
