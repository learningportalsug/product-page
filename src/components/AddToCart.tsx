import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 335px;
  height: 40px;
  margin: 20px auto;
  position: relative;
`;

const ButtonContent = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer>
        <ButtonContent onClick={onClick}>
          Add to Cart
        </ButtonContent>
    </ButtonContainer>
  );
};

export default AddToCartButton;