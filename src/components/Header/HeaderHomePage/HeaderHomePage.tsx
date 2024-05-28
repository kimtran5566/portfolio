import React from "react";
import LanguageHeaderHomePage from "./LanguageHeaderHomePage";
import NotificationHeaderHomePage from "./NotificationHeaderHomePage";
import HelpHeaderHomePage from "./HelpHeaderHomePage";
import LeftNavHeaderHomePage from "./LeftNavHeaderHomePage";
import SearchHeaderHomePage from "./SearchHeaderHomePage";
import ButtonShoppingCartHeaderHomePage from "./ButtonShoppingCartHeaderHomePage";
import LogoEZShop from "./LogoEZShop";
import AccountHeaderHomePage from "./AccountHeaderHomePage";
import { useLocation } from "react-router-dom";

export const HeaderHomePage = () => {
  const location = useLocation();
  return (
    <header
      className={`${(location.pathname === "/detail_product" ? "" : "sticky")}
        top-0 left-0 right-0 transform translate-z-0 z-50 bg-gradient-to-b from-[#f53d2d] to-[#f63]  h-[119px] text-white flex flex-col justify-between`}
    >
      <div className="flex flex-col w-[1200px] mx-auto">
        <div className="flex justify-between items-center space-x-4 place-items-center h-[34px] text-sm">
          <LeftNavHeaderHomePage />
          <ul className="flex space-x-3 ">
            <li className="cursor-pointer flex justify-center items-center ">
              <NotificationHeaderHomePage />
            </li>
            <li className="cursor-pointer flex justify-center items-center ">
              <HelpHeaderHomePage />
            </li>
            <li className="cursor-pointer flex justify-center items-center ">
              <LanguageHeaderHomePage />
            </li>
            <AccountHeaderHomePage />
          </ul>
        </div>
      </div>
      <div className="flex w-[1200px] mx-auto pt-4 pb-2.5 grow items-center">
        <LogoEZShop />
        <SearchHeaderHomePage />
        <ButtonShoppingCartHeaderHomePage />
      </div>
    </header>
  );
};
