import React, { useEffect, useState } from "react";
import { useAppSelector } from "hooks/reduxHook/reduxHook";
const ImagesDetailProduct = () => {
  const { thumbnail, images } = useAppSelector((state) => state.product);
  const [active, setActive] = useState("");
  const [changeImages, setChangeImages] = useState<string>(thumbnail);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleMouseEnter = (imageSrc: string, e: any) => {
    setChangeImages(imageSrc);
    let name = e.target.dataset.name;
    setActive(name);
  };
  const carouselLength = 5;
  const carousel = Array.from(
    { length: carouselLength },
    (_, index) => (currentIndex + index) % images.length
  );
  const handleActionCarousel = (num: number) => {
    let newIndex = currentIndex + num;
    if (newIndex < 0 || newIndex > images.length - 5) {
      return;
    }
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    setCurrentIndex(0);
  }, []);
  return (
    <div className="w-2/5">
      <div className="p-6">
        <img className="w-full h-[26rem]" alt="" src={changeImages} />
      </div>
      <div className="px-4 flex relative gap-2">
        <button
          className="bg-gray-500/40 w-5 h-10 absolute top-1/2 translate-y-[-50%] left-[1.2rem]"
          type="button"
          onClick={() => handleActionCarousel(-1)}
        >
          <div className="w-4 ml-1 z-50">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </div>
        </button>
        {images && carousel.map((i, idx) => (
          <div key={idx} className="w-18">
            <img
              className={`${
                active === images[i] ? "border-red-500" : ""
              } border-2 w-24 h-20`}
              src={images[i]}
              alt={images[i]}
              data-name={images[i]}
              onMouseEnter={(e) => {
                handleMouseEnter(images[i], e);
              }}
            />
          </div>
        ))}
        <button
          className="bg-gray-500/40 w-5 h-10 absolute top-1/2 translate-y-[-50%] right-[1.2rem]"
          type="button"
          onClick={() => handleActionCarousel(1)}
        >
          <div className="w-4">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ImagesDetailProduct;
