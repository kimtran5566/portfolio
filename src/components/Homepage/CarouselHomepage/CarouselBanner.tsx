import React, { useEffect, useLayoutEffect, useState } from "react";
import ItemBanner from "../Item/DataBanner";
import { useGetBannerQuery } from "services/homepageApi";

const CarouselBanner: React.FC = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);
  const { data } = useGetBannerQuery();
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const Records = { ...data?.records };
  const banner: { fields: { id: string; src: string; alt: string } }[] = [];

  for (const key in Records) {
    if (Object.hasOwnProperty.call(Records, key)) {
      banner.push(Records[key]);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateValue((pre) => pre - 796.66);
    }, 3000);

    return () => clearInterval(interval);
  }, [translateValue]);

  useLayoutEffect(() => {
    if (translateValue < -3186.64) {
      setTranslateValue(0);
    }
    if (translateValue > 0) {
      setTranslateValue(-3186.64);
    }
  }, [translateValue]);

  const handlePrevClick = () => {
    if (translateValue === 0) {
      setTranslateValue((pre) => pre - 3186.64);
    } else if (translateValue < 0) {
      setTranslateValue((pre) => pre + 796.66);
    }
  };

  const handleNextClick = () => {
    setTranslateValue((pre) => pre - 796.66);
  };

  const handleDotClick = (id: string) => {
    const index = banner.findIndex((item) => item.fields.id === id);
    setTranslateValue(-796.66 * index);
  };

  return (
    <div className="relative">
      <div
        className="relative grid grid-flow-col auto-cols-max overflow-hidden w-[796.64px]"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        {banner
          .sort((a, b) => +a.fields.id - +b.fields.id)
          .map(({ fields }) => (
            <div
              key={fields.id}
              className={`"flex transition-transform ease-in-out duration-300"`}
              style={{
                width: "135%",
                transform: `translateX(${translateValue}px)`,
                transition: "all ease 500ms 0s",
              }}
            >
              <a href="_blank">
                <ItemBanner src={fields.src} alt={fields.alt} id={fields.id} />
              </a>
            </div>
          ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banner.map(({ fields }) => (
            <button
              key={fields.id}
              onClick={() => handleDotClick(fields.id)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                -796.66 *
                  banner.findIndex((item) => item.fields.id === fields.id) ===
                translateValue
                  ? "bg-gray-800"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        {showButtons && (
          <>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <span
                className="inline-flex items-center justify-center w-[25px] h-[60px] bg-[rgba(0,0,0,.18)] text-black font-semibold py-2 px-2 transition-all cursor-pointer "
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
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <span
                className="inline-flex items-center justify-center w-[25px] h-[60px] bg-[rgba(0,0,0,.18)] text-black font-semibold py-2 px-2 transition-all cursor-pointer  "
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
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselBanner;
