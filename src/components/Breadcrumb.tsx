import React from 'react';
import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: center;  /* Center horizontally */
  padding: 10px 20px;
  font-family: 'Satoshi', sans-serif;
  font-size: 9px;
  color: #000000;
  opacity: 0.5;
  letter-spacing: 0px;
  height: 11px;
`;

const BreadcrumbItem = styled.span`
  &:not(:last-child)::after {
    content: '/';
    margin: 0 5px;
  }
`;

interface BreadcrumbProps {
  home: string;
  products: string;
  category: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ home, products, category }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbItem>{home}</BreadcrumbItem>
      <BreadcrumbItem>{products}</BreadcrumbItem>
      <BreadcrumbItem>{category}</BreadcrumbItem>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;