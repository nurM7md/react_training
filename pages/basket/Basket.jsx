import React from "react";
import NavBar from "../../components/shared/navbar";
import Header from "../../components/basket/header/Header";
import Cart from "../../components/basket/cart/Cart";
import Lastcomp from './../../components/ELmontagat/lastcomp/Lastcomp'
import Footer from './../../components/shared/footer/footer'

const Basket = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Cart />
      <Lastcomp />
      <Footer />
    </>
  );
};

export default Basket;
