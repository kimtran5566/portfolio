import React, { useState } from "react";
import { useGetCategoryQuery } from "services/homepageApi";
import ItemCategory from "../Item/DataCategory";

const CarouselCategory: React.FC = () => {
  const { data } = useGetCategoryQuery();
  const [translateValue, setTranslateValue] = useState<number>(0);
  const Records = { ...data?.records };
  const category = [];

  for (const key in Records) {
    if (Object.hasOwnProperty.call(Records, key)) {
      category.push(Records[key]);
    }
  }

  const handlePrevClick = () => {
    setTranslateValue(0);
  };

  const handleNextClick = () => {
    setTranslateValue(-480);
  };

  return (
    <div className="relative mx-auto w-[1200px] block">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-in-out"
          style={{
            width: "135%",
            transform: `translateX(${translateValue}px)`,
            transition: "all ease 500ms 0s",
          }}
        >
          <div className="grid grid-rows-2 grid-flow-col auto-cols-max h-[302px] text-sm">
            {category
              .sort((a, b) => +a.fields.id - +b.fields.id)
              .map(({ fields }) => (
                <div
                  className="flex w-[120px] justify-center items-center border-gray-200 border-r border-b text-black-87 hover:shadow-md transition duration-100 ease-in-out group"
                  key={fields.id}
                >
                  <a href="_blank">
                    <ItemCategory
                      id={fields.id}
                      name={fields.name}
                      src={fields.src}
                      alt={fields.alt}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>

      <button
        className={`bottom-[45%] z-0 flex items-center justify-center rounded-full w-10 h-10 mt-[130px] ml-[-20px] bg-[#fff] cursor-pointer focus:outline-none shadow-lg hover:scale-150 ${
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
        className={` bottom-[45%] end-0 z-10 flex items-center justify-center rounded-full w-10 h-10 mt-[130px] mr-[-20px] bg-[#fff] cursor-pointer group focus:outline-none shadow-lg hover:scale-150 ${
          translateValue === -480
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

export default CarouselCategory;
