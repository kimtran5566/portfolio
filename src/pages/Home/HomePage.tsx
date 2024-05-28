import { FooterHomePage } from "components/Footer/FooterHomePage";
import { HeaderHomePage } from "components/Header/HeaderHomePage/HeaderHomePage";
import MainHomePage from "components/Homepage/MainHomePage";
import React from "react";

const HomePage = () => {
	return (
		<div>
			<HeaderHomePage />
			<MainHomePage />
			<FooterHomePage />
		</div>
	);
};

export default HomePage;
