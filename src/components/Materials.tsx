import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h2`
  font-family: 'Satoshi', sans-serif;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-family: 'Satoshi', sans-serif;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 10px;
`;

const MaterialItem = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 13px;
  margin-bottom: 5px;
`;

const Materials = () => {
  return (
    <Section>
      <Title>Materials</Title>
      <ProductTitle>Eirene Black Asymmetrical Top</ProductTitle>
      <MaterialItem>85% Nylon, 15% Spandex</MaterialItem>
      <ProductTitle>Eirene Faux Leather Mini Skirt</ProductTitle>
      <MaterialItem>55% Polyurethane, 45% Cotton</MaterialItem>
      <MaterialItem>Lining: 90% Polyester, 10% Spandex</MaterialItem>
    </Section>
  );
};

export default Materials;