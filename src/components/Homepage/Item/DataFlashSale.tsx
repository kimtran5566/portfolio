import React from "react";
interface ItemF {
	_id: string;
	title: string;
	price: number;
	discountPercentage: number;
	thumbnail: string;
}
const ItemFlashSale: React.FC<ItemF> = ({
	thumbnail,
	title,
	price,
	_id,
	discountPercentage,
}) => {
  return (
    <div className="flex flex-col relative px-[15px] w-[200px] h-[248px]">
      <div className="block justify-center items-center h-[170px]">
        <div className="bg-[#fff] bg-contain">
          <img
            className="w-[170px] h-[170px]"
            src={thumbnail}
            alt={title}
            id={_id}
          />
          <div className="absolute z-3 top-0 right-3.5 py-1 px-1 font-medium h-[21px] rounded-bl-sm flex bg-[#ffe97a] space-x-1">
            <div className=" bg-[#ffe97a] cursor-pointer">
              <svg
                className="fill-current text-gradient-from w-[10px] h-[19px]"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffe97a"
                fill="#ffe97a"
              >
                <path
                  d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z"
                  fill="url(#paint0_linear_2216_10611)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2216_10611"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EE4D2D" />
                    <stop offset="1" stopColor="#FF7337" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="block bg-[#ffe97a] text-[#ec3814] text-xs leading-[14px] font-medium">
              {discountPercentage}%
            </span>
          </div>
        </div>
        <div className="flex flex-col py-[15px] place-items-center">
          <div className="flex justify-center w-full text-xl font-normal mb-5 text-[#ee4d2d] h-[27px] items-center">
            <span className="text-lg mr-[2px] ">₫</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFlashSale;
