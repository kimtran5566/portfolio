import { FooterHomePage } from "components/Footer/FooterHomePage";
import Footer from "components/Footer/FooterShoppingCart";
import { HeaderHomePage } from "components/Header/HeaderHomePage/HeaderHomePage";
import MainShoppingCart from "components/MainShoppingCart/MainShoppingCart";
import React from "react";

const ShoppingCartPage = () => {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <HeaderHomePage />
        <MainShoppingCart />
        <FooterHomePage />
      </div>
    </>
  );
};

export default ShoppingCartPage;
