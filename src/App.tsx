import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "layouts/HomeLayout";
import MainHomePage from "components/Homepage/MainHomePage";
import LoginPage from "pages/Login/LoginPage";
import RegisterLayout from "layouts/RegisterLayout";
import PhoneNumberRegister from "components/Register/PhoneNumberRegister";
import PasswordRegister from "components/Register/PasswordRegister";
import SuccessfullyRegister from "components/Register/SuccessfullyRegister";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";
import ForgetPasswordLayout from "layouts/ForgetPasswordLayout";
import ShoppingCartPage from "pages/ShoppingCart/ShoppingCartPage";
import AuthLayout from "layouts/AuthLayout";
import DetailProductLayout from "layouts/DetailProductLayout";
import DetailProduct from "pages/DetailProduct/DetailProduct";


function App() {
	
	return (
		<>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index element={<MainHomePage />} />
				</Route>
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterLayout />}>
					<Route index element={<PhoneNumberRegister />} />
					<Route path="pwd" element={<PasswordRegister />} />
					<Route path="success" element={<SuccessfullyRegister />} />
				</Route>
				<Route path="reset" element={<ForgetPasswordLayout />}>
					<Route index element={<ForgetPassword />} />
					<Route path="pwd" element={<PasswordRegister />} />
					<Route path="success" element={<SuccessfullyRegister />} />
				</Route>
				<Route path="/shoppingcart" element={<AuthLayout />}>
					<Route index element={<ShoppingCartPage />} />
				</Route>
				<Route path="detail_product" element={<DetailProductLayout />}>
					<Route index element={<DetailProduct />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
