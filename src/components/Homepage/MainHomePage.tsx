import CountdownTimer from "features/CountdownTimer";
import React from "react";
// import { dataRequest } from "./data/dataRequest";
// import ItemRequest from "./Item/DataRequest";
import CarouselBanner from "./CarouselHomepage/CarouselBanner";
import CarouselCategory from "./CarouselHomepage/CarouselCategory";
import CarouselFlashsale from "./CarouselHomepage/CarouselFlashsale";
import SuggestProduct from "./SuggestProduct/SuggestProduct";

const MainHomePage = () => {
  return (
    <div className="block bg-[#f5f5f5] ">
      <div className="bg-[#fff] pt-10">
        <div className="grid grid-cols-3 grid-rows-2 w-[1200px] h-[235px] mx-auto">
          <div className="grid col-span-2 row-span-2 w-[796.67px] h-full">
            <CarouselBanner />
          </div>
          <div className="row-span-1 space-y-[5px]">
            <div>
              <img
                className="w-[398.33px] h-[115px]"
                src="https://cf.shopee.vn/file/vn-50009109-2f55f9ccad102d583843efdcf2d0d979_xhdpi"
                alt="img-banner1"
              />
            </div>
            <div className="row-start-2 row-span-1">
              <img
                className="w-[398.33px] h-[115px]"
                src="https://cf.shopee.vn/file/vn-50009109-01b48568222b6d3cf87fcc9733893bbe_xhdpi"
                alt="img-banner2"
              />
            </div>
          </div>
        </div>
      </div>
      <menu className="space-y-10 mt-4">
        <div className="bg-[#fff] block h-[363.11px] w-[1200px] mx-auto space-y-4 ">
          <div>
            <div className="h-[61.11px] align-items-center border-b border-gray-200 px-5">
              <span className="block text-lg text-gray-500 pt-4">
                DANH MỤC
              </span>
            </div>
            <div className="h-[302px]">
              <CarouselCategory />
            </div>
          </div>
        </div>

        <div>
          <div className="w-[1200px] bg-[#fff] mx-auto">
            <div className="flex w-full h-[60px] justify-between p-4">
              <div className="flex space-x-3">
                <p className="font-semibold text-2xl text-[#ee4d2d]">
                  FLASH SALE
                </p>
                <div className="pt-1.5 font-semibold text-lg text-[#fff]">
                  <CountdownTimer />
                </div>
              </div>
              <a href="_blank" className="text-orange-500">
                See all
              </a>
            </div>
            <CarouselFlashsale />
          </div>

          <div className=" w-[1200px] mx-auto">
            <div className="sticky top-[119px] z-20">
              <div className="mt-[20px]">
                <ul className="bg-[#fff] flex">
                  <li className="relative w-full h-[60px] py-[0.9375rem] px-[2.875rem] mx-auto">
                    <div className="absolute w-full h-[4px] bg-orange-500 bottom-0 left-0"></div>
                    <span className="text-xl text-[#ee4d2d] flex justify-center">
                      GỢI Ý HÔM NAY
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <SuggestProduct />
          </div>
        </div>
      </menu>
    </div>
  );
};
export default MainHomePage;
