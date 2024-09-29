import React from 'react';
import styled from 'styled-components';

const PaymentTypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding: 10px 0;
`;

const PaymentImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const PaymentTypes = () => {
  return (
    <PaymentTypesContainer>
      <PaymentImage 
        src="/assets/abcd.png" 
        alt="Accepted payment types: Visa, Mastercard, Shop Pay, PayPal, Apple Pay, Afterpay, Klarna"
      />
    </PaymentTypesContainer>
  );
};

export default PaymentTypes;