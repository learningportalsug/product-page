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

const Text = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 12px;
  line-height: 1.5;
`;

const ShippingAndReturns = () => {
  return (
    <Section>
      <Title>Shipping and Returns</Title>
      <Text>
        This vintage inspired cardigan and cami wouldn't be complete without some equally flattering jeans Dark vibes onlyyyyy
      </Text>
    </Section>
  );
};

export default ShippingAndReturns;