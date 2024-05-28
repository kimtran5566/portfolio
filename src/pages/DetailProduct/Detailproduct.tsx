import BreadcrumbDetailProduct from "components/DetailProduct/BreadcrumbDetailProduct";
import MainContentProduct from "components/DetailProduct/MainContentProduct";
import ProductDescription from "components/DetailProduct/ProductDescription";
import ShopProduct from "components/DetailProduct/ShopProduct";
import React from "react";

const DetailProduct = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div id="container" className="w-[74rem] m-auto">
        <BreadcrumbDetailProduct />
        <MainContentProduct />
        <ShopProduct />
        <ProductDescription/>
      </div>
    </div>
  );
};

export default DetailProduct;
