import React from 'react'
import './banner.css'
import ImageSlider from '../image_slider/image_slider'
import Slider from '../slider/slider';
import styled from 'styled-components';

const Banner = () => {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* <ImageSlider /> */}
      <Slider />
      <div className="home" id="home">
        <div className="main-text">
          <h1 className='animate__animated animate__fadeInUp animate__duration-2s'>Connecting Students of Terai</h1>
          <h2 className='animate__animated animate__fadeInUp animate__duration-2s animate__delay-1s'>Through Culture and Celebration</h2>
          <a onClick={() => smoothScroll('about')} className='animate__animated animate__duration-2s animate__fadeInUp animate__delay-2s'>
            <button className="btn">Know More</button>
          </a>
        </div>
      </div>
    </>
  )
}
export default Banner