import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

const SizeGuide = styled.a`
  font-size: 12px;
  color: #000;
  text-decoration: underline;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background: #EDEDED;
  padding: 10px 20px;
  margin-bottom: 1px;
`;

const ItemImage = styled.img`
  width: 58px;
  height: 73px;
  margin-right: 15px;
  border-radius: 5px;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SelectSizeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectSizeLabel = styled.span`
  font-size: 12px;
`;

const SelectSize = styled.select`
  background: #EDEDED;
  border: none;
  width: 30px;
`;

const Section = styled.section`
  border-bottom: 1px solid #e0e0e0;
`;

const SizeSelector: React.FC = () => {
  const [topSize, setTopSize] = useState('');
  const [skirtSize, setSkirtSize] = useState('');

  return (
    <Container>
      <Header>
        <Title>Select Sizes</Title>
        <SizeGuide href="#">Size Guide</SizeGuide>
      </Header>
      <Section>
      <ItemContainer>
        <ItemImage 
          src={`${process.env.PUBLIC_URL}/assets/SHOULDER_TANK_5034145.png`} 
          alt="Eirene Black Asymmetrical Top" 
        />
        <ItemInfo>
          <ItemName>Eirene Black Asymmetrical Top</ItemName>
          <SelectSizeWrapper>
            <SelectSizeLabel>Select Size</SelectSizeLabel>
            <SelectSize value={topSize} onChange={(e) => setTopSize(e.target.value)}>
              <option value=""></option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </SelectSize>
          </SelectSizeWrapper>
        </ItemInfo>
      </ItemContainer>
      <ItemContainer>
        <ItemImage 
          src={`${process.env.PUBLIC_URL}/assets/BELT_SKIRT_ 117.png`} 
          alt="Eirene Vegan Leather Mini Skirt" 
        />
        <ItemInfo>
          <ItemName>Eirene Vegan Leather Mini Skirt</ItemName>
          <SelectSizeWrapper>
            <SelectSizeLabel>Select Size</SelectSizeLabel>
            <SelectSize value={skirtSize} onChange={(e) => setSkirtSize(e.target.value)}>
              <option value=""></option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </SelectSize>
          </SelectSizeWrapper>
        </ItemInfo>
      </ItemContainer>
      </Section>
    </Container>
  );
};

export default SizeSelector;