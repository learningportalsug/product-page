import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 80px;
`;

const MenuItem = styled.div`
  font-family: 'Satoshi', sans-serif;
  font-size: 9px;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0px;
  text-align: left;
  width: 23px;
  height: 11px;
`;

const Logo = styled.div`
  transform: translateX(20%);
  left: 60%;
  width: 100px;
  height: 30px;
  background: url('${process.env.PUBLIC_URL}/assets/Finesse-Logo_Black.png') no-repeat center center;
  background-size: contain;
`;

const NavIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const CartIcon = styled.div`
  font-family: 'Satoshi', sans-serif;
  font-size: 9px;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0px;
  text-align: left;
  width: 31px;
  height: 11px;
`;

const SearchIcon = styled.div`
  font-family: 'Satoshi', sans-serif;
  font-size: 9px;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0px;
  text-align: left;
  width: 28px;
  height: 11px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MenuItem>Menu</MenuItem>
      <Logo />
      <NavIcons>
        <CartIcon>Cart (0)</CartIcon>
        <SearchIcon>Search</SearchIcon>
      </NavIcons>
    </HeaderContainer>
  );
};

export default Header;