import Footer from "components/Footer/FooterShoppingCart";
import HeaderShoppingCart from "components/Header/HeaderShoppingCart";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ShoppingCartLayout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="bg-[#f5f5f5]">
				<HeaderShoppingCart />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default ShoppingCartLayout;
