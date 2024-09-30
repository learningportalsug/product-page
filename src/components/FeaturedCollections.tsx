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

const CollectionCard = styled.div`
  position: relative;
`;

const CollectionImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CollectionName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
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

const collections = [
  { id: 1, name: 'Getaway Collection', image: 'Mobile-Banner-1.png' },
  { id: 2, name: 'Era Collection', image: 'Mobile-Banner.png' },
];

const FeaturedCollections = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section>
      <Header>
        <Title>Featured Collections</Title>
        <ViewAllLink href="#">View All</ViewAllLink>
      </Header>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
      >
        {collections.map(collection => (
          <SwiperSlide key={collection.id}>
            <CollectionCard>
              <CollectionImage 
                src={`${process.env.PUBLIC_URL}/assets/${collection.image}`} 
                alt={collection.name} 
              />
              <CollectionName>{collection.name}</CollectionName>
            </CollectionCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderLineContainer>
        {collections.map((_, index) => (
          <SliderLinePart key={index} active={index === activeIndex} />
        ))}
      </SliderLineContainer>
    </Section>
  );
};

export default FeaturedCollections;