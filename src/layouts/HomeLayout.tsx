import { FooterHomePage } from "components/Footer/FooterHomePage";
import { HeaderHomePage } from "components/Header/HeaderHomePage/HeaderHomePage";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<HeaderHomePage />
			<Outlet />
			<FooterHomePage />
		</>
	);
};

export default HomeLayout;
