import React, { useState } from "react";
import TopMain from "./TopMain";
import BottomMain from "./BottomMain";
import CenterMain from "./CenterMain";

const MainShoppingCart = () => {
  return (
    <div className="w-9/12 m-auto space-y-2 mt-8">
      <TopMain />
      <CenterMain />
      <BottomMain />
    </div>
  );
};

export default MainShoppingCart;
