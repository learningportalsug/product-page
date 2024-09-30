import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  position: relative;
  overflow: visible;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 125%; // Maintains aspect ratio
  position: relative;
  overflow: hidden;
  background-color: white;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const SliderLineContainer = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  right: 20px;
  height: 2px;
  margin-top: 20px;
`;

const SliderLinePart = styled.div<{ active: boolean }>`
  flex: 1;
  height: 100%;
  background-color: ${props => (props.active ? '#808080' : '#E5E5E5')};
`;

const SwiperWrapper = styled(Swiper)`
  overflow: visible;
  padding: 0 20px;
`;

const productImages = [
  'FINESSE_03testm__497.png',
  'FINESSE_03testm__498.png',
  'FINESSE_03testm__509.png',
];

const ProductImage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ImageContainer>
      <SwiperWrapper
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageWrapper>
              <Image 
                src={`${process.env.PUBLIC_URL}/assets/${image}`} 
                alt={`Product view ${index + 1}`} 
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <SliderLineContainer>
        {productImages.map((_, index) => (
          <SliderLinePart key={index} active={index === activeIndex} />
        ))}
      </SliderLineContainer>
    </ImageContainer>
  );
};

export default ProductImage;