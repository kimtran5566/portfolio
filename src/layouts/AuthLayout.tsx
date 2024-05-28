import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const token = localStorage.getItem("token");
	return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default AuthLayout;
