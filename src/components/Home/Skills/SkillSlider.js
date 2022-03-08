// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const SkillSlider = ({ items }) => {
    return (
        <Swiper spaceBetween={50} slidesPerView={6}>
            {items.map(({ skill }, index) => (
                <SwiperSlide key={index}>{skill + ' / '}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SkillSlider;
