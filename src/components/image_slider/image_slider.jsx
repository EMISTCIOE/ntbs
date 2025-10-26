import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { slideshowImages } from '../../data/BannerSlideshowImages'
const images = slideshowImages;

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 20px;
  @media (max-width: 980px) {
    width: 100%;
    bottom: 10%;
    right: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            $isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`;

const ImageSlider = ({
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback((slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlayTime, nextSlide]);

  return (
    <Wrapper {...props} id='main'>
      {images.map((image, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${image.imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></Slide>
      ))}
      <Gradient />
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default ImageSlider;