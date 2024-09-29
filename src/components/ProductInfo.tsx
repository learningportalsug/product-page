import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;  /* Stack items vertically */
  align-items: center;     /* Center items horizontally */
  font-family: 'Satoshi', sans-serif;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 5px;
`;

const Discount = styled.p`
  font-size: 12px;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 20px;
`;

const Section = styled.section`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const ProductInfo: React.FC = () => {
  return (
    <Section>
    <Container>
      <Title>Eirene Belted Set</Title>
      <Price>$70.00</Price>
      <Discount>10% off when purchased as a set</Discount>
    </Container>
    </Section>
  );
};

export default ProductInfo;