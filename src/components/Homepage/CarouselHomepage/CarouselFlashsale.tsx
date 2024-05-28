import React, { useState } from "react";
import ItemFlashSale from "../Item/DataFlashSale";
import { useGetProductsQuery } from "services/productsApi";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "components/DetailProduct/slice/productSlice";

interface Product {
  _id: string;
  thumbnail: string;
  images: { name: string; src: string }[];
  title: string;
  price: number;
  brand: string;
  colors: string[];
  sizes: string[];
  selectColor: string;
  selectSize: string;
  isActiveColor: string;
  isActiveSize: string;
  isValidData: boolean;
  quantity: number;
  discountPercentage: number;
  rating: number;
}

const CarouselFlashsale: React.FC = () => {
  const { data } = useGetProductsQuery();
  const [translateValue, setTranslateValue] = useState<number>(0);
  const dispatch = useAppDispatch();
	const navigate = useNavigate();

  const handleClick = async (product: Product) => {
    console.log("product suggest", product);
    const {discountPercentage, rating, ...newProduct } = {
      ...product,
    };
    await dispatch(updateProduct(newProduct));
    await navigate("/detail_product");
  };

  const handlePrevClick = () => {
    if (translateValue === 0) {
      setTranslateValue(0);
    } else if (translateValue < 0) {
      setTranslateValue((pre) => pre + 800);
    }
  };

  const handleNextClick = () => {
    if (translateValue === -2400) {
      setTranslateValue(-2400);
    } else if (translateValue > -2400) {
      setTranslateValue((pre) => pre - 800);
    }
  };

  return (
    <div className="relative w-[1200px]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-in-out"
          style={{
            width: "135%",
            transform: `translateX(${translateValue}px)`,
            transition: "all ease 500ms 0s",
          }}
        >
          <div className="relative grid grid-flow-col bg-[#fff]">
            {data?.data.map((product) => (
              <div key={product._id} className="w-[200px] h-[247.99px] cursor-pointer"
              onClick={() => handleClick(product)}>
                <ItemFlashSale
                  _id={product._id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price} 
                  discountPercentage={product.discountPercentage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className={` bottom-2/4 z-10 flex items-center justify-center rounded-full w-10 h-10 mt-[130px] ml-[-20px] bg-[#fff] cursor-pointer focus:outline-none shadow-lg hover:scale-150 ${
          translateValue === 0
            ? "hidden"
            : "absolute transition ease-in-out duration-300"
        }`}
      >
        <span
          className="inline-flex items-center justify-center rounded-full text-black font-semibold py-2 px-2 transition-all cursor-pointer "
          onClick={() => handlePrevClick()}
        >
          <svg
            className="w-4 h-4 text-gray-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        className={` bottom-2/4 end-0 z-10 flex items-center justify-center rounded-full w-10 h-10 mt-[130px] mr-[-20px] bg-[#fff] cursor-pointer group focus:outline-none shadow-lg hover:scale-150 ${
          translateValue <= -2400
            ? "hidden"
            : "absolute transition ease-in-out duration-300"
        }`}
      >
        <span
          className="inline-flex items-center justify-center rounded-full bg-[#fff] text-black font-semibold py-2 px-2 transition-all cursor-pointer  "
          onClick={() => handleNextClick()}
        >
          <svg
            className="w-4 h-4 text-gray-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CarouselFlashsale;
