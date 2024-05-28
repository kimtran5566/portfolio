import React from "react";
import { useAppSelector } from "hooks/reduxHook/reduxHook";

const TopContentProduct = () => {
  const product = useAppSelector((state) => state.product)
  return (
    <>
        <div>
          <div className="text-xl font-medium">{product.title}</div>
          <div className="flex w-3/5 my-2">
            <div className="text-[#ee4d2d] border-r pr-3">
              <button>5.0 &#9733;&#9733;&#9733;&#9733;&#9733;</button>
            </div>
            <div className="border-r px-3">
              <button>1.2k Đánh Giá</button>
            </div>
            <div className="px-3">12k Đã Bán</div>
          </div>
          <div className="p-4 text-[#ee4d2d] font-semibold text-2xl bg-[#fafafa]">
            {product.price}$
          </div>
        </div>
    </>
  );
};

export default TopContentProduct;
