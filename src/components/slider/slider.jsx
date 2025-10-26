import './slider.css';
import React from 'react';
import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { slideshowImages } from '../../data/BannerSlideshowImages'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const images = slideshowImages;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`;

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                {images.map((image, index) => (<SwiperSlide key={index}><img src={image.imageUrl} alt={image.alt} /><Gradient /></SwiperSlide>))}
            </Swiper>
        </>
    );
}

export default Slider;
