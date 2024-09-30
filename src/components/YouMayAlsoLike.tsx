import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section = styled.section`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-family: 'Satoshi', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
`;

const ViewAllLink = styled.a`
  font-family: 'Satoshi', sans-serif;
  font-size: 12px;
  color: #000;
  text-decoration: underline;
`;

const ProductCard = styled.div`
  text-align: left;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0;
  margin-bottom: 5px;
`;

const ProductName = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 14px;
  margin: 0 0 2px 0;
`;

const ProductPrice = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const SliderLineContainer = styled.div`
  display: flex;
  margin-top: 10px;
  height: 2px;
`;

const SliderLinePart = styled.div<{ active: boolean }>`
  flex: 1;
  height: 100%;
  background-color: ${props => props.active ? '#808080' : '#E5E5E5'};
`;

const products = [
  { id: 1, name: 'Amelie Festival Set', price: '$86.00', image: 'FINESSE_03testm__591.png' },
  { id: 2, name: 'Adrian Blue Mini', price: '$36.00', image: 'FINESSE_03testm__498.png' },
];

const YouMayAlsoLike = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section>
      <Header>
        <Title>You may also like</Title>
        <ViewAllLink href="#">View All</ViewAllLink>
      </Header>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard>
              <ProductImage 
                src={`${process.env.PUBLIC_URL}/assets/${product.image}`} 
                alt={product.name} 
              />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderLineContainer>
        {products.map((_, index) => (
          <SliderLinePart key={index} active={index === activeIndex} />
        ))}
      </SliderLineContainer>
    </Section>
  );
};

export default YouMayAlsoLike;