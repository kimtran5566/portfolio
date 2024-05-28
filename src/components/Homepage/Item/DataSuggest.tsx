import React from "react";
interface ItemS {
  thumbnail: string;
  price: number;
  alt: string;
  title: string;
  rating: number;
  discountPercentage: number;
}

const ItemSuggest: React.FC<ItemS> = ({
  price,
  title,
  alt,
  thumbnail,
  discountPercentage,
  rating,
}) => {
  return (
    <div className="relative w-full h-full group">
      <div className="flex flex-col">
        <div className="relative w-full h-full flex-none flex items-center justify-center">
            <div className="w-full h-full">
              <img className="w-full h-[185px]" src={thumbnail} alt={alt} />
            </div>
          <div className="absolute top-0 right-0 z-3 py-1 px-2 bg-[#ffe97a] rounded-bl-sm">
            <span className="block text-[#ec3814] text-xs leading-[14px] font-medium">
              -{discountPercentage}%
            </span>
          </div>
          <div className="absolute top-0 left-0 z-3 flex flex-col mt-2 ml-[-3px]">
            <div
              className="relative bg-contain bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://down-vn.img.susercontent.com/file/76c36bd87ff2eb5887d9ad3516111869')",
                width: "46px",
                height: "18px",
              }}
            ></div>
          </div>
        </div>
        <div className="border-box flex flex-col p-[8px] min-h-[40px] flex-grow">
          <div className="mb-[4px] min-h-[40px] flex-grow">
            <span className=" w-full mb font-medium leading-tight">{title}</span>
          </div>
          <div className="mb-[4px] min-h-[20px] flex-grow">
            <div className="flex items-center justify-between w-full">
              <div className="text-orange-500 text-normal font-normal">{price}$</div>
              <div className="ml-0.5 text-xs h-[14px] text-gray-500">Rating: {rating}</div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSuggest;
