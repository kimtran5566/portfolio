import { useAppSelector } from "hooks/reduxHook/reduxHook";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const BreadcrumbDetailProduct = () => {
  const product = useAppSelector((state) => state.product)
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="py-4">
      <div className="flex">
        <div className="text-sm text-blue-700">
          <NavLink to="/">Shopee</NavLink>
        </div>
        {pathnames.map((name, index) => (
          <div key={index} className="text-sm">
            <span className="mx-2 text-sm">&gt;</span>
            <span>{name}</span>
            <span className="mx-2 text-sm">&gt;</span>
            <span>{product.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadcrumbDetailProduct;
