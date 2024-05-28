import React, { useState } from "react";
import { Form, Formik } from "formik";
import { rulesPasswordRegister } from "./data/rulesRegister";
import CustomButtonLoginRegister from "components/CustomForm/CustomButtonLoginRegister/CustomButtonLoginRegister";
import CustomInputLoginRegister from "components/CustomForm/CustomInputLoginRegister/CustomInputPassword";
import { useAppDispatch, useAppSelector } from "hooks/reduxHook/reduxHook";
import { dataUserAdd } from "./slice/dataUserSlice";
import { useRegisterMutation } from "services/loginApi";
import { useLocation, useNavigate } from "react-router-dom";

const PasswordFormRegister = () => {
	const [register] = useRegisterMutation();
	const values = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const [showPassword, setShowPassword] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<Formik
			initialValues={{
				password: "",
			}}
			validationSchema={rulesPasswordRegister}
			onSubmit={(value, { setSubmitting, resetForm }) => {
				const dataUser = { ...values, ...value };
				register(dataUser);
				dispatch(dataUserAdd(dataUser));
				setSubmitting(false);
				resetForm();
				if (location.state.pathFrom === "/reset") {
					navigate("/login");
				} else {
					navigate(`${location.state.pathFrom}/success`);
				}
			}}
			isValid
			isSubmitting
			errors
			touched
		>
			{({ isSubmitting, isValid, errors, touched }) => (
				<Form>
					<div className="mb-[10px] flex justify-center items-center">
						<div className="grow ">
							<CustomInputLoginRegister
								display={true}
								errors={errors}
								touched={touched}
								name="password"
								type={showPassword ? "password" : "text"}
								placeholder="Mật khẩu"
								handleClick={() => setShowPassword(!showPassword)}
							/>
						</div>
					</div>
					<div>
						<p className="text-[#C8C8C8] text-sm min-h-5 mb-[10px] align-middle">
							Ít nhất một kí tự viết thường.
						</p>
						<p className="text-[#C8C8C8] text-sm min-h-5 mb-[10px] align-middle">
							Ít nhất một kí tự viết hoa.
						</p>
						<p className="text-[#C8C8C8] text-sm min-h-5 mb-[10px] align-middle">
							8-16 kí tự
						</p>
						<p className="text-[#C8C8C8] text-sm min-h-5 mb-[10px] align-middle">
							Chỉ các chữ cái, số và ký tự phổ biến mới có thể được sử dụng
						</p>
					</div>
					<div className="mt-10">
						<CustomButtonLoginRegister
							disabled={!isValid || isSubmitting}
							nameButton={
								location.state.pathFrom === "/reset" ? "Tiếp theo" : "Đăng Ký"
							}
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default PasswordFormRegister;
