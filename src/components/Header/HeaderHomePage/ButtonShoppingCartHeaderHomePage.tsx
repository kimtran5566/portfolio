import { useAppSelector } from "hooks/reduxHook/reduxHook";
import React from "react";
import { Link } from "react-router-dom";

const ButtonShoppingCartHeaderHomePage = () => {
	const counter = useAppSelector((state) => state.counter.value)
	return (
    <div className="flex justify-center items-center box-border w-[138px] h-[59px] pb-[10px]">
      <Link
        to="/shoppingcart"
        className="flex justify-center items-center mt-4"
      >
        <div className="flex justify-center items-center w-[26px] h-[26px]">
          <svg viewBox="0 0 26.6 25.6" fill="white" stroke="white">
            <polyline
              fill="none"
              points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2.5"
            ></polyline>
            <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
            <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
          </svg>
        </div>
      </Link>
      <span className="bg-white text-[#ee4d2d] w-fit rounded-lg">
			<span className="px-2 font-light text-sm">{counter}</span>
		</span>
    </div>
  );
};

export default ButtonShoppingCartHeaderHomePage;
