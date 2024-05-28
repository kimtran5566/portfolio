import React from "react";
import FormLogin from "./FormLogin";
import GoogleLoginButton from "../CustomForm/GoogleFaceBookButton/GoogleLoginButton";
import FaceBookLoginButton from "../CustomForm/GoogleFaceBookButton/FaceBookLoginButton";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "hooks/reduxHook/reduxHook";

const Login = () => {
	const token = useAppSelector((state) => state.user.token);
	return (
		<main className="bg-[#EE4E2D]">
			{token && <Navigate to="/" />}
			<div className="h-[600px] w-[1040px] flex justify-end items-center mx-auto">
				<div className="flex justify-between w-full">
					<div className="h-[482px]"></div>
					<div className="w-[400px] h-[482px] bg-white box-border shadow-[0_3px_10px_0_rgba(0,0,0,.14)] rounded">
						<h2 className="px-[30px] py-[22px] text-xl text-left">Đăng nhập</h2>
						<div className="pt-0 px-[30px] pb-[30px]">
							<FormLogin />
							<div className="my-[10px] flex justify-between">
								<Link className="text-xs text-[#05a]" to="/reset">
									Quên mật khẩu
								</Link>
								<a className="text-xs text-[#05a]" href="_blank">
									Đăng nhập với SMS
								</a>
							</div>
							<div>
								<div className="pb-[14px] flex items-center ">
									<div className="h-[0.5px] w-full bg-[#dbdbdb] flex-1"></div>
									<span className="text-[#ccc] px-4 text-xs">HOẶC</span>
									<div className="h-[0.5px] w-full bg-[#dbdbdb] flex-1"></div>
								</div>
								<div className="flex justify-between m-[-5px]">
									<FaceBookLoginButton />
									<GoogleLoginButton />
								</div>
							</div>
						</div>
						<div className="mb-[30px]">
							<div className="text-sm p-1 text-[rgba(0,0,0,.26)] flex justify-center items-center w-full pr-1 whitespace-pre">
								Bạn mới biết đến EZ Shop?
								<Link
									className="text-[#ee4d2d] font-medium ml-[2px]"
									to="/register"
								>
									Đăng ký
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;
