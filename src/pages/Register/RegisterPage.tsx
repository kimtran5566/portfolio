import FooterRegisterLogin from "components/Footer/FooterRegisterLogin";
import HeaderRegister from "components/Header/HeaderRegister";
import PasswordRegister from "components/Register/PasswordRegister";
import PhoneNumberRegister from "components/Register/PhoneNumberRegister";
import SuccessfullyRegister from "components/Register/SuccessfullyRegister";
import React from "react";

const RegisterPage = () => {
	return (
		<>
			<HeaderRegister />
			<PhoneNumberRegister />
			<PasswordRegister />
			<SuccessfullyRegister />
			<FooterRegisterLogin />
		</>
	);
};

export default RegisterPage;
