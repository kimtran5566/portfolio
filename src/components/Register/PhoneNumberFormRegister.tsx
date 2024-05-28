import React from "react";
import { Formik, Form } from "formik";
import { rulesUserNameRegister } from "./data/rulesRegister";
import CustomInput from "components/CustomForm/CustomInputLoginRegister/CustomInput";
import CustomButtonLoginRegister from "components/CustomForm/CustomButtonLoginRegister/CustomButtonLoginRegister";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import { dataUserAdd } from "./slice/dataUserSlice";
import { useNavigate } from "react-router-dom";

const PhoneNumberFormRegister = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				userName: "",
			}}
			validationSchema={rulesUserNameRegister}
			onSubmit={(value, { setSubmitting, resetForm }) => {
				console.log(value);
				dispatch(dataUserAdd({ ...value, password: "", token: "" }));
				setSubmitting(false);
				resetForm();
				navigate("/register/pwd", {
					state: { pathFrom: "/register" },
				});
			}}
			isValid
			validateOnChange={false}
		>
			{({ isValid }) => (
				<Form>
					<CustomInput
						name="userName"
						label=""
						type="text"
						placeholder="Nhập số điện thoại"
					/>

					<CustomButtonLoginRegister
						disabled={!isValid}
						nameButton="Tiếp Theo"
					/>
				</Form>
			)}
		</Formik>
	);
};

export default PhoneNumberFormRegister;
