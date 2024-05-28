import React, { useState } from "react";
import { Formik, Form } from "formik";
import rulesValidLogin from "./data/rulesValidLogin";
import CustomButtonLoginRegister from "components/CustomForm/CustomButtonLoginRegister/CustomButtonLoginRegister";
import CustomInput from "components/CustomForm/CustomInputLoginRegister/CustomInput";
import CustomInputPassword from "components/CustomForm/CustomInputLoginRegister/CustomInputPassword";
import { useLoginMutation } from "services/loginApi";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import { dataUserAdd } from "components/Register/slice/dataUserSlice";

const FormLogin = () => {
	const [login, { error }] = useLoginMutation();
	const dispatch = useAppDispatch();
	const [showPassword, setShowPassword] = useState(true);

	return (
		<div>
			{error && (
				<div className="bg-[#fff9fa] border border-solid border-[#fccfd1] flex box-border rounded-sm py-[12px] px-[15px] mb-[25px]">
					<div className="w-4 mr-2.5 flex justify-center items-center">
						<svg viewBox="0 0 16 16" className="w-4 h-4 ">
							<path
								fill="none"
								stroke="#FF424F"
								d="M8 15A7 7 0 108 1a7 7 0 000 14z"
								clip-rule="evenodd"
							></path>
							<rect
								stroke="none"
								width="7"
								height="1.5"
								x="6.061"
								y="5"
								fill="#FF424F"
								rx=".75"
								transform="rotate(45 6.06 5)"
							></rect>
							<rect
								stroke="none"
								width="7"
								height="1.5"
								fill="#FF424F"
								rx=".75"
								transform="scale(-1 1) rotate(45 -11.01 -9.51)"
							></rect>
						</svg>
					</div>
					<p className="text-sm ">
						Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại
					</p>
				</div>
			)}
			<Formik
				initialValues={{
					userName: "",
					password: "",
				}}
				validationSchema={rulesValidLogin}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					login(values);
					dispatch(dataUserAdd({ ...values, token: "" }));
					resetForm();
					setSubmitting(false);
				}}
				isSubmitting
				errors
				touched
				isValid
			>
				{({ isSubmitting, errors, touched, isValid }) => (
					<Form>
						<div className="flex flex-col mb-[10px] space-y-2">
							<CustomInput
								label=""
								name="userName"
								type="text"
								placeholder="Email/Số điện thoại/Tên đăng nhập"
							/>
						</div>
						<div className="flex flex-col mb-[10px] space-y-2">
							<CustomInputPassword
								display={true}
								errors={errors}
								touched={touched}
								name="password"
								type={showPassword ? "password" : "text"}
								placeholder="Mật khẩu"
								handleClick={() => setShowPassword(!showPassword)}
							/>
						</div>
						<CustomButtonLoginRegister
							disabled={!isValid || isSubmitting}
							nameButton="Đăng Nhập"
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormLogin;
