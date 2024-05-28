import FooterRegisterLogin from "components/Footer/FooterRegisterLogin";
import HeaderRegister from "components/Header/HeaderRegister";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const RegisterLayout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<HeaderRegister />
			<Outlet />
			<FooterRegisterLogin />
		</>
	);
};

export default RegisterLayout;
