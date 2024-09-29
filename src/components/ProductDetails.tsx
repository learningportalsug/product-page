import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const ProductDetails: React.FC = () => {
  return (
    <Section>
      <Title>Product Details</Title>
      <Description>
        Channeling some major Britney Spears inspo with this one! The Chloe is here and will have 'em all singing "hit me baby one more time"...
      </Description>
    </Section>
  );
};

export default ProductDetails;