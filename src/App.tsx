import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import SizeSelector from './components/SizeSelector';
import AddToCart from './components/AddToCart';
import ProductDetails from './components/ProductDetails';
import Materials from './components/Materials';
import ShippingAndReturns from './components/ShippingAndReturns';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import FeaturedCollections from './components/FeaturedCollections';
import Footer from './components/Footer';
import PaymentTypes from './components/PaymentTypes';

const AppContainer = styled.div`
  font-family: 'Satoshi', sans-serif;
  max-width: 390px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const handleAddToCart = () => {
    // add to cart logic
    console.log('Product added to cart');
  };

  return (
    <AppContainer>
      <Header />
      <Breadcrumb home="Home" products="Products" category="Thea Tank Top" />
      <ProductImage />
      <ProductInfo />
      <SizeSelector />
      <AddToCart onClick={handleAddToCart} />
      <ProductDetails />
      <Materials />
      <ShippingAndReturns />
      <YouMayAlsoLike />
      <FeaturedCollections />
      <Footer />
      <PaymentTypes />

    </AppContainer>
  );
};

export default App;